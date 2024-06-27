import Image from 'next/image';
import BalanceSelectItem from '@/features/balance/components/BalanceSelectItem';

const Balance = () => {
  return (
    <div className="px-6">
      <BalanceSelectItem />
      <div className="w-15 relative h-24">
        <Image src="/svgs/verse.svg" className="mx-auto" alt="vs" width={64} height={96} />
      </div>
      <BalanceSelectItem />
    </div>
  );
};

export default Balance;
