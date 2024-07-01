'use client';
import { MainPostListType } from '@/types/mainType';
import { useRouter } from 'next/navigation';
import React from 'react';

const MainBalanceItem = ({ id, subject, leftSideTitle, rightSideTitle }: MainPostListType) => {
  const router = useRouter();
  const handleClick = () => router.push(`/balance/${id}?subject=${subject}`);

  return (
    <div
      className="flexBetweenCenter cursor-pointer gap-3 rounded-lg bg-blue-100 px-5 py-1 text-center"
      onClick={handleClick}
    >
      <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs">
        {leftSideTitle}
      </p>
      <p className="text-2xl font-bold text-gray-200">VS</p>
      <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs">
        {rightSideTitle}
      </p>
    </div>
  );
};

export default MainBalanceItem;
