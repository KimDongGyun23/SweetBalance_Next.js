'use client';

import { SubHeaderProps } from '@/types/commonType';
import { useRouter } from 'next/navigation';
import { AiOutlineInbox, AiOutlineLeft } from 'react-icons/ai';

const SubHeader = ({ icon, children }: SubHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flexBetweenCenter mb-4 text-gray-200">
      <div className="flexAlign gap-1">
        <AiOutlineLeft className="cursor-pointer" size={19} onClick={() => router.back()} />
        <p className="text-xl font-semibold">{children}</p>
      </div>

      {icon && (
        <div className="flexAlign gap-1">
          <AiOutlineInbox size={14} />
          <p className="text-xs font-bold leading-3">12</p>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
