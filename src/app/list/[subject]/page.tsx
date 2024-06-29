'use client';

import CircleButton from '@/components/CircleButton';
import Loading from '@/components/Loading';
import getBalanceList from '@/features/list/apis/getBalanceList';
import ListItem from '@/features/list/components/ListItem';
import { useInfiniteView } from '@/hooks/useInfiniteView';
import changeSubjectLang from '@/utils/changeSubjectLang';
import { usePathname } from 'next/navigation';

const ListPage = () => {
  const path = usePathname();
  const subject = path.replace('/list/', '');

  const {
    list: postList,
    ref,
    isLoading,
  } = useInfiniteView((cursor) => getBalanceList(subject, cursor));

  return (
    <>
      <div className="flexColumn gap-5">
        {postList.map((postItem: any) => (
          <ListItem
            subject={changeSubjectLang(subject) + ' balance'}
            postItem={postItem}
            key={postItem.id}
          />
        ))}
      </div>
      {isLoading ? <Loading /> : <div ref={ref} style={{ height: '30px' }} />}
      <CircleButton>NEW</CircleButton>
    </>
  );
};

export default ListPage;
