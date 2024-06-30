import getMainList from '@/app/apis/getMainList';
import MainBalanceList from '@/app/components/MainBalanceList';
import { MainListType } from '@/types/mainType';

export default async function Home() {
  const { allPostList } = await getMainList();

  return (
    <div className="flexColumn gap-5">
      {allPostList.map((list: MainListType) => (
        <MainBalanceList subject={list.subject} postList={list.postList} key={list.subject} />
      ))}
    </div>
  );
}
