import MAIN_API from '@/apis/mainApi';
import MainBalanceList from './components/MainBalanceList';
import { MainListType } from '@/types/mainType';

const fetchData = async () => {
  try {
    const response = await MAIN_API.GET.main();
    if (!response.ok) {
      console.error('Failed to fetch data');
      return [];
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default async function Home() {
  const { allPostList } = await fetchData();

  return (
    <div className="flexColumn gap-5">
      {allPostList.map((list: MainListType) => (
        <MainBalanceList subject={list.subject} postList={list.postList} key={list.subject} />
      ))}
    </div>
  );
}
