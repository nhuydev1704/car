'use client';

import { ArrowRightIcon, SunIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';
import { Rating } from 'react-simple-star-rating';

const ProductItem = () => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-md">
      <div className="relative aspect-video">
        <Image
          layout="fill"
          objectFit="cover"
          alt="product item"
          src="https://autochot.com/uploads/img/2024/12/117686/large_9116976d48d08fa3c4d462a6fb00e756.jpeg"
        />
      </div>
      <div className="px-[15px] py-[10px]">
        <div className="flex items-center">
          <Rating
            className="mt-1"
            initialValue={0.8}
            allowFraction
            iconsCount={1}
            size={22}
            readonly
          />
          <p className="ms-1 text-xs font-bold text-gray-900">4.95</p>
          <span className="mx-1.5 size-1 rounded-full bg-gray-500" />
          <div className="text-xs font-medium text-gray-900 underline">
            73 reviews
          </div>
        </div>
        <div className="text-[14px] font-bold">Red Mazda 6 - Elite Estate</div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1">
            <SunIcon />
            <span className="text-[12px] font-semibold">Xăng 2.4L</span>
          </div>
          <div className="flex items-center gap-1">
            <SunIcon />
            <span className="text-[12px] font-semibold">Xăng 2.4L</span>
          </div>
          <div className="flex items-center gap-1">
            <SunIcon />
            <span className="text-[12px] font-semibold">Xăng 2.4L</span>
          </div>
          <div className="flex items-center gap-1">
            <SunIcon />
            <span className="text-[12px] font-semibold">Xăng 2.4L</span>
          </div>
        </div>

        <div className="flex justify-between">
          <div />
          <button type="button" className="btn btn-link btn-sm mt-2">
            Xem ngay
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
