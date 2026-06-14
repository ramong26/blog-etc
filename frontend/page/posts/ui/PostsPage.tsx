import { Button } from '@repo/ui';

import { PostCardItem } from '@/widgets/post-list';

import { POST_PAGE_FILTER_MOCK } from '../model/post-page-filter.mock';

export function PostsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-red-700">POSTS</h1>
          <span className="text-2xl text-gray-700">
            개발을 하면서 배우는 것들에 대해 기록합니다.
          </span>
        </div>
        <div className="flex gap-4 border-b-2 border-black pb-6">
          {POST_PAGE_FILTER_MOCK.map((filter) => (
            <Button key={filter.id} className="rounded px-4 py-2 text-xl">
              {filter.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <PostCardItem />
      </div>
      <div>
        <Button className="rounded px-4 py-2">Load More</Button>
      </div>
    </div>
  );
}
