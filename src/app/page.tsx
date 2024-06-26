import MainBalanceItem from './components/MainBalanceItem';
import NavHeader from './components/NavHeader';

export default function Home() {
  return (
    <div className="gap-4 rounded-lg bg-white px-2 py-3">
      <NavHeader>최고 인기</NavHeader>
      <MainBalanceItem />
    </div>
  );
}
