import MainBalanceList from './components/MainBalanceList';

export default function Home() {
  return (
    <div className="flexColumn gap-5">
      {[...Array(3)].map((_, index) => (
        <MainBalanceList key={index} />
      ))}
    </div>
  );
}
