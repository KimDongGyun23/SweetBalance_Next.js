import { MainPostItemType } from '@/types/mainType';
import React from 'react';

const MainBalanceItem = ({ leftSideTitle, rightSideTitle }: MainPostItemType) => {
  return (
    <div className="flexBetweenCenter gap-3 rounded-lg bg-blue-100 px-5 py-1 text-center">
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
