import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/shared/constants/queryKey';

import { getPostList } from './posts-api';

export const useGetPostListQuery = () => {
  return useQuery({
    queryKey: queryKeys.posts.lists(),
    queryFn: getPostList,
  });
};
