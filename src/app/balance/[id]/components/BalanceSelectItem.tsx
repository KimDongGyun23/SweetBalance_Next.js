const BalanceSelectItem = () => {
  return (
    <div>
      <div className="flexCenter mb-2 min-h-24 rounded-xl bg-blue-400 px-5">
        <p className="text-center text-3xl font-bold text-white">내 생각 읽기 가능</p>
      </div>
      <div className="flexCenter min-h-11 rounded-xl bg-blue-100 px-5 py-2">
        <p className="text-sm text-gray-100">
          내가 1시간 동안 마음 속으로 상상한 것을 누군가 읽을 수 있음
        </p>
      </div>
    </div>
  );
};

export default BalanceSelectItem;
