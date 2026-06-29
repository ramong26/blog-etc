import { PostList } from '../model/posts-type';

export const getPostList = async (): Promise<PostList[]> => {
  const response = await fetch('/api/posts');

  if (!response.ok) {
    throw new Error('게시글을 불러오지 못했습니다.');
  }

  const data = await response.json();
  return data;
};
