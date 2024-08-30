'use client';

import { IconType } from 'react-icons';
import { AppPages } from '@/lib';
import { BiColor, BiMessage } from 'react-icons/bi';
import { PiSunLight } from 'react-icons/pi';

export interface MainNavProps {
  title: string;
  items?: NavItem[];
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  isOnClick?: boolean;
  onClick?: boolean;
  icon?: IconType;
}

export const NavItems: NavItem[] = [
  // { title: 'Blogs', href: AppPages.blogs },
  // { title: 'Courses', href: AppPages.courses },
  { title: 'Projects', href: AppPages.project },
  { title: 'Theme', href: 'THEME', icon: BiColor },
];