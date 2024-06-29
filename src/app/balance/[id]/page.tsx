'use client';
import Image from 'next/image';
import BalanceSelectItem from '@/features/balance/components/BalanceSelectItem';
import usebalanceGameData from '@/features/balance/hooks/usebalanceGameData';
import Loading from '@/components/Loading';
import ErrorText from '@/components/ErrorText';

const Balance = () => {
  const { isLoading, isError, balanceData } = usebalanceGameData();

  if (isLoading) return <Loading />;
  if (isError || !balanceData) return <ErrorText>밸런스 게임이 존재하지 않습니다.</ErrorText>;

  return (
    <div className="w-full px-6">
      <BalanceSelectItem title={balanceData.leftSideTitle} detail={balanceData.leftSideDetail} />
      <div className="w-15 relative h-24">
        <Image src="/svgs/verse.svg" className="mx-auto" alt="vs" width={64} height={96} />
      </div>
      <BalanceSelectItem title={balanceData.rightSideTitle} detail={balanceData.rightSideDetail} />
    </div>
  );
};

export default Balance;
