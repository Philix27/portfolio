'use client';
import { AppStores } from '@/lib';
import { NavItem, NavItems, TextP } from '@/comps';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';
import { useTheme } from 'next-themes';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { PiSpeakerHighThin, PiSpeakerSimpleXLight } from 'react-icons/pi';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function Drawer(props: { items?: NavItem[] }) {
  const store = AppStores.useSettingsStore();
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const path = usePathname();

  console.log('path:', path);
  return (
    <div className="w-full h-screen flex  fixed top-0 left-0 bg-black/30 ">
      <motion.div
        initial={{ x: 0, opacity: 0.5, translateX: -20 }}
        animate={{ x: 0, opacity: 1, translateX: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        className={'w-[60%] max-w-[300px] bg-secondary rounded-r-2xl'}
      >
        <HomeDrawer router={router} items={props.items} />
      </motion.div>
      <div
        className={'w-[40%]'}
        onClick={() => {
          store.update({ drawerIsOpen: false });
        }}
      />
    </div>
  );
}

const homePaths = ['/', '/about-us', '/contact-us', '/faq', '/privacy', '/terms-condition'];
function DrawerRow(props: { title: string; icon?: IconType; onClick?: VoidFunction }) {
  const Icon = props.icon!;
  return (
    <div className="w-full flex items-center py-2 border-b-[0.3px]" onClick={props.onClick}>
      {props.icon && <Icon className="mr-4" size={20} />}
      <TextP className={'font-bold'}>{props.title}</TextP>
    </div>
  );
}

function HomeDrawer(props: { router: AppRouterInstance; items?: NavItem[] }) {
  const { router } = props;
  const { setTheme, theme } = useTheme();
  const store = AppStores.useSettingsStore();

  return (
    <div className="px-4 mt-[50px]">
      {NavItems.map((val) => (
        <DrawerRow
          title={val.title}
          icon={val.icon}
          onClick={() => {
            if (val.href === 'THEME') {
              setTheme(theme === 'light' ? 'dark' : 'light');
              return;
            }
            if (val.href) {
              router.push(val.href);
            }
          }}
        />
      ))}
    </div>
  );
}
