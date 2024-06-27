import React from 'react';

const BalanceRegisterItem = () => {
  return (
    <div>
      <div className="flexCenter mb-2 min-h-24 rounded-xl bg-blue-300 px-5">
        <textarea
          className="scrollbar-hide w-full resize-none bg-transparent text-center align-middle text-2xl font-bold placeholder-white focus:outline-none"
          placeholder="주제를 적어주세요"
        />
      </div>
      <div className="flexCenter min-h-11 rounded-xl bg-blue-100 px-5 py-2">
        <textarea
          className="w-full resize-none bg-transparent text-center text-sm placeholder-gray-100 focus:outline-none"
          placeholder="설명을 적어주세요"
        />
      </div>
    </div>
  );
};

export default BalanceRegisterItem;
