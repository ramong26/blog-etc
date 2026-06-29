'use client';

import {
  LeftArchiveLayout,
  RightArchiveLayout,
} from '@/widgets/archive-layout';
import { Header } from '@/widgets/header';

import QueryProvider from '../provider';

interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <QueryProvider>
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <div className="my-[30px] flex w-full flex-1 gap-10">
          <LeftArchiveLayout />
          <main className="flex-1 overflow-hidden">{children}</main>
          <RightArchiveLayout />
        </div>
      </div>
    </QueryProvider>
  );
}
