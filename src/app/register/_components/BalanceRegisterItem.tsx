'use client';

import { BalanceRegisterItemProps } from '@/types/registerType';

const BalanceRegisterItem = ({ side, register, errors }: BalanceRegisterItemProps) => {
  const title = `${side}SideTitle`;
  const detail = `${side}SideDetail`;

  return (
    <div>
      <div className="flexCenter mb-2 min-h-24 rounded-xl bg-blue-300 px-5">
        <textarea
          className="w-full resize-none bg-transparent text-center align-middle text-2xl font-bold placeholder-white scrollbar-hide focus:outline-none"
          placeholder="주제를 적어주세요"
          {...register(title)}
        />
      </div>
      <p className="-mt-2 mb-3 text-sm text-error">
        {errors[title] && (errors[title]?.message as string)}
      </p>

      <div className="flexCenter min-h-11 rounded-xl bg-blue-100 px-5 py-2">
        <textarea
          className="w-full resize-none bg-transparent text-center text-sm placeholder-gray-100 focus:outline-none"
          placeholder="설명을 적어주세요"
          {...register(detail)}
        />
      </div>
      <p className="text-sm text-error">{errors[detail] && (errors[detail]?.message as string)}</p>
    </div>
  );
};

export default BalanceRegisterItem;
