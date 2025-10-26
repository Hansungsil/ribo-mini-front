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

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/',
  },
  {
    title: 'Posts',
    icon: (
      <StickyNote className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/posts',
  },
  {
    title: 'Layouts',
    icon: (
      <LayoutDashboard className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/layouts',
  },
  {
    title: 'Components',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/compos',
  },
  {
    title: 'Info',
    icon: (
      <User className='h-full w-full text-neutral-600 dark:text-neutral-300' />
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
              className='aspect-square rounded-full bg-gray-200 dark:bg-gray-800'
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