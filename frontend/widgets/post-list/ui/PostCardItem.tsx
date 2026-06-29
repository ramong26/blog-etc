'use client';

import { Badge, Card } from '@repo/ui';

import { useGetPostListQuery } from '@/entities/post/api/useGetPostListQuery';

// TODO: 테스트용이니 수정 필요
export function PostCardItem() {
  const { data: postList } = useGetPostListQuery();

  return (
    <>
      {postList?.map((post) => (
        <Card key={post.id} className="max-w-9xl w-full border-2">
          <Card.Content className="relative inset-0 flex gap-6">
            {post.imageUrl ? (
              <></>
            ) : (
              // <Image
              //   src={post.imageUrl}
              //   alt={post.title}
              //   width={200}
              //   height={200}
              //   className="shrink-0 rounded-md object-cover"
              // />
              <div className="h-31.25 w-31.25 shrink-0 rounded-md bg-gray-200" />
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
                  {post.description}
                </Card.Description>
              </div>
            </div>
          </Card.Content>
        </Card>
      ))}
    </>
  );
}
