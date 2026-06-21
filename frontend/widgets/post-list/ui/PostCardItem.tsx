'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Badge, Card } from '@repo/ui';

interface Post {
  id: number;
  title: string;
  content: string;
  tags?: string[];
  imageUrl?: string | null;
  createdAt: string;
}

// TODO: 테스트용이니 수정 필요
export function PostCardItem() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('/api/posts');

        if (!response.ok) {
          throw new Error('게시글을 불러오지 못했습니다.');
        }

        const data = (await response.json()) as Post[];
        setPosts(data);
      } catch (error) {
        setErrorMessage(
          error instanceof Error
            ? error.message
            : '게시글을 불러오지 못했습니다.',
        );
      } finally {
        setIsLoading(false);
      }
    };

    void getPosts();
  }, []);

  if (isLoading) {
    return <span className="text-xl text-gray-500">Loading...</span>;
  }

  if (errorMessage) {
    return <span className="text-xl text-red-600">{errorMessage}</span>;
  }

  if (posts.length === 0) {
    return <span className="text-xl text-gray-500">게시글이 없습니다.</span>;
  }

  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} className="max-w-9xl w-full border-2">
          <Card.Content className="relative inset-0 flex gap-6">
            {post.imageUrl ? (
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={200}
                height={200}
                className="shrink-0 rounded-md object-cover"
              />
            ) : (
              <div className="h-[200px] w-[200px] shrink-0 rounded-md bg-gray-200" />
            )}
            <div className="flex min-w-0 flex-1 flex-col gap-10">
              <Card.Header className="flex justify-between gap-5 px-0">
                <div className="flex min-w-0 gap-2 truncate overflow-scroll">
                  {post.tags?.map((tag) => (
                    <Badge key={tag} className="text-lg">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <span>
                  {new Date(post.createdAt).toLocaleDateString('ko-KR')}
                </span>
              </Card.Header>
              <div className="flex flex-col gap-4">
                <Card.Title className="truncate text-4xl font-bold">
                  {post.title}
                </Card.Title>
                <Card.Description className="line-clamp-4 text-2xl">
                  {post.content}
                </Card.Description>
              </div>
            </div>
          </Card.Content>
        </Card>
      ))}
    </>
  );
}
