'use client';

import CircleButton from '@/components/CircleButton';
import Loading from '@/components/Loading';
import getBalanceList from '@/features/list/apis/getMainList';
import ListItem from '@/features/list/components/ListItem';
import { useInfiniteView } from '@/hooks/useInfiniteView';

const ListPage = () => {
  const subject = 'latest';
  const {
    list: postList,
    ref,
    isLoading,
  } = useInfiniteView((cursor) => getBalanceList(subject, cursor));

  return (
    <>
      <div className="flexColumn gap-5">
        {postList.map((postItem: any) => (
          <ListItem postItem={postItem} key={postItem.id} />
        ))}
      </div>
      {isLoading ? <Loading /> : <div ref={ref} style={{ height: '30px' }} />}
      <CircleButton>NEW</CircleButton>
    </>
  );
};

export default ListPage;
