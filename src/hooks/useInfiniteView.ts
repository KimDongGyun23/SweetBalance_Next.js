import { FetchResponse } from '@/types/commonType';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfiniteView = (fetchFunc: (cursor: number) => Promise<FetchResponse>) => {
  const [cursor, setCursor] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);
  const { ref, inView } = useInView({ threshold: 0.5, delay: 0 });

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const res = await fetchFunc(cursor);
    setIsLoading(false);
    if (res.lastCursor === -1) setIsLast(true);

    setList((prevList) => [...prevList, ...res.postList]);
    setCursor(cursor + 1);
  }, [cursor, fetchFunc]);

  useEffect(() => {
    if (inView && !isLast && !isLoading) {
      fetchData();
    }
  }, [inView, fetchData, isLast, isLoading]);

  return { cursor, list, ref, isLoading };
};
