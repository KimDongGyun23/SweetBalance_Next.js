import getMainList from '@/features/main/apis/getMainList';
import MainBalanceList from '@/features/main/components/MainBalanceList';
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
