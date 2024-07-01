import { CircleButtonProps } from '@/types/commonType';
import Link from 'next/link';

const CircleButton = ({ url, children }: CircleButtonProps) => {
  return (
    <Link href={url}>
      <div className="flexCenter fixed bottom-10 h-20 w-20 cursor-pointer self-end rounded-full border-4 border-blue-400 bg-white">
        <p className="text-lg font-bold text-blue-400">{children}</p>
      </div>
    </Link>
  );
};

export default CircleButton;
