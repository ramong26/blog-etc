import Link from 'next/link';

import { HEADER_MENU } from '../model/header-menu';

export function Header() {
  return (
    <header className="mx-auto w-full border-b-2 border-border-strong py-4">
      <nav className="flex items-center justify-center gap-20">
        {HEADER_MENU.map((item) => (
          <HeaderMenu key={item.href} label={item.label} href={item.href} />
        ))}
      </nav>
    </header>
  );
}

interface HeaderMenuProps {
  label: string;
  href: string;
}
function HeaderMenu({ label, href }: HeaderMenuProps) {
  return (
    <Link
      href={href}
      className="text-2xl font-medium text-primary transition-all duration-200 hover:font-bold hover:text-accent-red"
    >
      {label}
    </Link>
  );
}
