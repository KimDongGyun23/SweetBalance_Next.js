import MainBalanceList from '@/app/_components/MainBalanceList';
import getMainList from '@/services/main/getMainList';
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
