'use client';

import CircleButton from '@/components/CircleButton';
import Loading from '@/components/Loading';
import getBalanceList from '@/app/list/[subject]/apis/getBalanceList';
import ListItem from '@/app/list/[subject]/components/ListItem';
import { useInfiniteView } from '@/hooks/useInfiniteView';
import changeSubjectLang from '@/utils/changeSubjectLang';
import { ListPageType } from '@/types/listType';

const ListPage = ({ params }: ListPageType) => {
  const subject = params.subject;
  const {
    list: postList,
    ref,
    isLoading,
  } = useInfiniteView((cursor) => getBalanceList(subject, cursor));

  return (
    <div className="flexColumn">
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
      <CircleButton url="/register">NEW</CircleButton>
    </div>
  );
};

export default ListPage;
