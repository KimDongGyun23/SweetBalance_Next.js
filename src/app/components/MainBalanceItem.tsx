import React from 'react';

const MainBalanceItem = () => {
  return (
    <div className="flexBetweenCenter gap-3 rounded-lg bg-blue-100 px-5 py-1 text-center">
      <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-2xl font-bold text-gray-200">VS</p>
      <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs">item</p>
    </div>
  );
};

export default MainBalanceItem;
