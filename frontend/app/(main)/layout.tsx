import { Header } from '@/widgets/header';

interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      {children}
    </div>
  );
}
