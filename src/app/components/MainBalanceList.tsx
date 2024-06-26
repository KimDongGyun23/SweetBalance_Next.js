import React from 'react';
import NavHeader from './NavHeader';
import MainBalanceItem from './MainBalanceItem';

const MainBalanceList = () => {
  return (
    <div className="rounded-lg bg-white px-2 py-3">
      <NavHeader>최고 인기</NavHeader>
      <div className="flexColumn gap-3">
        {[...Array(4)].map((_, index) => (
          <MainBalanceItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default MainBalanceList;
