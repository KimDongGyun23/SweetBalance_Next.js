import BALANCE_API from '@/apis/balanceApi';
import { BalanceDataType } from '@/types/balanceType';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const usebalanceGameData = () => {
  const path = usePathname();
  const id = +path.replace('/balance/', '');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [balanceData, setBalanceData] = useState<BalanceDataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BALANCE_API.GET.balance(id);
        if (!response.ok) {
          setIsError(true);
          throw new Error('Failed to fetch data');
        }
        setBalanceData(await response.json());
      } catch (error) {
        setIsError(true);
        throw new Error('Failed to fetch data');
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { isLoading, isError, balanceData, id };
};

export default usebalanceGameData;
