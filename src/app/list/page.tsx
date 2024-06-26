import ListItem from './components/ListItem';

const ListPage = () => {
  return (
    <div className="flexColumn gap-5">
      {[...Array(5)].map((_, index) => (
        <ListItem key={index} />
      ))}
    </div>
  );
};

export default ListPage;
