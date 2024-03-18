'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="navbar sticky top-0 z-[9999] flex justify-center bg-base-100 py-0 shadow-sm">
      <div className="flex w-full max-w-screen-xl justify-between">
        <div className="flex-1">
          <Image src="/icon.png" alt={AppConfig.name} width={45} height={20} />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-2 px-1 font-semibold">
            <li
              className={
                pathname === '/'
                  ? 'rounded-full bg-purple-400 font-bold text-[#f1f1f1]'
                  : ''
              }
            >
              <Link href="/">Trang chủ</Link>
            </li>
            <li>
              <Link href="/">Giới thiệu</Link>
            </li>
            <li>
              <Link href="/">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
