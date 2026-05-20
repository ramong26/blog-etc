import { ROUTES } from '@/shared/constants/route';

/**
 * @description Header menu
 * label: 메뉴에 표시될 텍스트
 * href: 메뉴 클릭 시 이동할 경로
 */
export const HEADER_MENU = [
  {
    label: 'HOME',
    href: ROUTES.LANDING,
  },
  {
    label: 'POSTS',
    href: ROUTES.POSTS,
  },
  {
    label: 'NOTES',
    href: ROUTES.NOTES,
  },
  {
    label: 'PROJECTS',
    href: ROUTES.PROJECTS,
  },
  {
    label: 'RESUME',
    href: ROUTES.RESUME,
  },
];

type HeaderMenuType = typeof HEADER_MENU;
export type HeaderMenuItemType = HeaderMenuType[number];
