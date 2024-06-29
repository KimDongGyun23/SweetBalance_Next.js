'use client';

import CircleButton from '@/components/CircleButton';
import Loading from '@/components/Loading';
import getBalanceList from '@/features/list/apis/getBalanceList';
import ListItem from '@/features/list/components/ListItem';
import { useInfiniteView } from '@/hooks/useInfiniteView';
import { ListPageType } from '@/types/listType';

const ListPage = ({ params }: ListPageType) => {
  const {
    list: postList,
    ref,
    isLoading,
  } = useInfiniteView((cursor) => getBalanceList(params.subject, cursor));

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
