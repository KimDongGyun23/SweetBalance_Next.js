import Image from 'next/image';
import BalanceSelectItem from '@/app/balance/[id]/_components/BalanceSelectItem';
import CircleButton from '@/components/CircleButton';
import balanceGameData from '../../../services/balance/balanceGameData';
import { BalancePageType } from '@/types/balanceType';

const Balance = async ({ params }: BalancePageType) => {
  const id = params.id;
  const balanceData = await balanceGameData(id);

  return (
    <>
      <div className="w-full px-6">
        <BalanceSelectItem title={balanceData.leftSideTitle} detail={balanceData.leftSideDetail} />
        <div className="w-15 relative h-24">
          <Image src="/svgs/verse.svg" className="mx-auto" alt="vs" width={64} height={96} />
        </div>
        <BalanceSelectItem
          title={balanceData.rightSideTitle}
          detail={balanceData.rightSideDetail}
        />
      </div>
      <CircleButton url={`/comment/${id}`}>댓글</CircleButton>
    </>
  );
};

export default Balance;
