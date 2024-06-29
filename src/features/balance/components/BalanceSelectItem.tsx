import { BalanceSelectItemType } from '@/types/balanceType';

const BalanceSelectItem = ({ title, detail }: BalanceSelectItemType) => {
  return (
    <div>
      <div className="flexCenter mb-2 min-h-24 rounded-xl bg-blue-400 px-5">
        <p className="text-center text-2xl font-bold text-white">{title}</p>
      </div>
      <div className="flexCenter min-h-11 rounded-xl bg-blue-100 px-5 py-2">
        <p className="text-sm text-gray-100">{detail}</p>
      </div>
    </div>
  );
};

export default BalanceSelectItem;
