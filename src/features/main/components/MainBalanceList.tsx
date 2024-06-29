import NavHeader from './NavHeader';
import MainBalanceItem from './MainBalanceItem';
import { MainListType } from '@/types/mainType';

const MainBalanceList = ({ subject, postList }: MainListType) => {
  return (
    <div className="rounded-lg bg-white px-2 py-3">
      <NavHeader>{subject}</NavHeader>
      <div className="flexColumn gap-3">
        {postList.map((postItem) => (
          <MainBalanceItem
            id={postItem.id}
            leftSideTitle={postItem.leftSideTitle}
            rightSideTitle={postItem.rightSideTitle}
            key={postItem.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBalanceList;
