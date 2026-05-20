'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui';

import { HEADER_MENU, HeaderMenuItemType } from '../model/header-menu';

export function Header() {
  const pathName = usePathname();

  return (
    <header className="mx-auto w-full border-b-2 border-border-strong py-2">
      <nav className="flex items-center justify-center gap-10">
        {HEADER_MENU.map((menuItem) => (
          <HeaderMenu
            key={menuItem.href}
            item={menuItem}
            isActive={pathName === menuItem.href}
          />
        ))}
      </nav>
    </header>
  );
}

interface HeaderMenuProps {
  item: HeaderMenuItemType;
  isActive: boolean;
}
function HeaderMenu({ item, isActive }: HeaderMenuProps) {
  return (
    <Link
      href={item.href}
      className="group p-4 text-2xl font-medium transition-all duration-200 hover:bg-accent-red hover:text-text-inverse"
    >
      <span
        className={cn(
          'border-b-2 border-transparent pb-3 transition-all duration-200',
          isActive &&
            'border-accent-red text-accent-red group-hover:text-text-inverse',
        )}
      >
        {item.label}
      </span>
    </Link>
  );
}
