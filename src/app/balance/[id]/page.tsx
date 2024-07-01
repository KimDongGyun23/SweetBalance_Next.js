import Image from 'next/image';
import BalanceSelectItem from '@/app/balance/[id]/components/BalanceSelectItem';
import CircleButton from '@/components/CircleButton';
import Link from 'next/link';
import balanceGameData from './apis/balanceGameData';
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
      <Link href={`/comment/${id}`}>
        <CircleButton>댓글</CircleButton>
      </Link>
    </>
  );
};

export default Balance;
