import Image from 'next/image';
import BalanceSelectItem from './components/BalanceSelectItem';

const Balance = () => {
  return (
    <div className="px-6">
      <BalanceSelectItem />
      <div className="w-15 relative h-24">
        <Image src="/svgs/verse.svg" alt="vs" layout="fill" />
      </div>
      <BalanceSelectItem />
    </div>
  );
};

export default Balance;
