import CircleButton from '@/components/CircleButton';
import ListItem from '@/features/list/components/ListItem';

const ListPage = () => {
  return (
    <>
      <div className="flexColumn gap-5">
        {[...Array(10)].map((_, index) => (
          <ListItem key={index} />
        ))}
      </div>
      <CircleButton>NEW</CircleButton>
    </>
  );
};

export default ListPage;
