import Image from 'next/image';

import { Badge, Card } from '@repo/ui';

import { POST_CARD_ITEM_MOCK } from '../model/post-card-item.mock';

export function PostCardItem() {
  return (
    <>
      {POST_CARD_ITEM_MOCK.map((item) => (
        <Card key={item.id} className="max-w-9xl w-full border-2">
          <Card.Content className="relative inset-0 flex gap-6">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={200}
              height={200}
              className="shrink-0 rounded-md"
              // fill
              // className="absolute my-5 h-full w-auto rounded-md object-cover"
            />
            <div className="flex min-w-0 flex-1 flex-col gap-10">
              <Card.Header className="flex justify-between gap-5 px-0">
                <div className="flex min-w-0 gap-2 truncate overflow-scroll">
                  {item.tags.map((tag) => (
                    <Badge key={tag} className="text-lg">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <span>{item.date}</span>
              </Card.Header>
              <div className="flex flex-col gap-4">
                <Card.Title className="truncate text-4xl font-bold">
                  {item.title}
                </Card.Title>
                <Card.Description className="line-clamp-4 text-2xl">
                  {item.description}
                </Card.Description>
              </div>
            </div>
          </Card.Content>
        </Card>
      ))}
    </>
  );
}
