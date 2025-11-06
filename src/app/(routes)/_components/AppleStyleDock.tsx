'use client';

import {
  Component,
  HomeIcon,
  StickyNote,
  LayoutDashboard,
  User,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/shadcn-io/dock';
import Link from 'next/link';
import cx from 'classnames';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-white dark:text-white' />
    ),
    href: '/',
  },
  {
    title: 'Posts',
    icon: (
      <StickyNote className='h-full w-full text-white dark:text-white' />
    ),
    href: '/posts',
  },
  {
    title: 'Layouts',
    icon: (
      <LayoutDashboard className='h-full w-full text-white dark:text-white' />
    ),
    href: '/layouts',
  },
  {
    title: 'Components',
    icon: (
      <Component className='h-full w-full text-white dark:text-white' />
    ),
    href: '/compos',
  },
  {
    title: 'Info',
    icon: (
      <User className='h-full w-full text-white dark:text-white' />
    ),
    href: '/info',
  },
];
export default function AppleStyleDock() {
  return (
    <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2 bg-transparent'>
      <Dock className='items-end pb-3 bg-transparent'>
        {data.map((item, idx) => (
          <Link href={item.href} key={idx}> 
            <DockItem
              className={cx('aspect-square rounded-full', {
                'bg-[#c084fc] dark:bg-[#e879f9]': idx % 2 === 0,
                'bg-[#818cf8] dark:bg-[#38bdf8]': idx % 2 === 1,
              })}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}