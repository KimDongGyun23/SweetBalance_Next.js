import { BubbleType } from '@/types/commentType';

const Bubble = ({ sideInfo }: BubbleType) => {
  return (
    <div className="relative min-w-8 max-w-48 break-words rounded-xl bg-white p-2 text-sm">
      {sideInfo === 0 ? (
        <div className="absolute -left-[19px] -top-[11.5px] rotate-[40deg] rounded-md border-[10px] border-x-[15px] border-transparent border-l-transparent border-r-white" />
      ) : (
        <div className="absolute -right-[19px] -top-[11.5px] -rotate-[40deg] rounded-md border-[10px] border-x-[15px] border-transparent border-l-white border-r-transparent" />
      )}
      hi
    </div>
  );
};

export default Bubble;
