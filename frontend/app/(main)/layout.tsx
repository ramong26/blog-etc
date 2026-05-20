import {
  LeftArchiveLayout,
  RightArchiveLayout,
} from '@/widgets/archive-layout';
import { Header } from '@/widgets/header';

interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="mx-auto my-[30px] flex gap-10">
        <LeftArchiveLayout />
        <main>{children}</main>
        <RightArchiveLayout />
      </div>
    </div>
  );
}
