import { CircleButtonProps } from '@/types/commonType';

const CircleButton = ({ onClick, children }: CircleButtonProps) => {
  return (
    <div
      className="flexCenter fixed bottom-10 h-20 w-20 cursor-pointer self-end rounded-full border-4 border-blue-400 bg-white"
      onClick={onClick}
    >
      <p className="text-lg font-bold text-blue-400">{children}</p>
    </div>
  );
};

export default CircleButton;
