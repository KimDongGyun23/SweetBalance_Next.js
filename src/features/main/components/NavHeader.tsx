'use client';
import { ChildrenProps } from '@/types/commonType';
import { AiOutlineRight } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import changeSubjectLang from '@/utils/changeSubjectLang';

const NavHeader = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const END_POINT = `/list/${changeSubjectLang((children as string).slice(0, 2))}`;

  return (
    <div className="flexAlign mb-4 cursor-pointer gap-1" onClick={() => router.push(END_POINT)}>
      <div className="text-xl font-semibold">{children}</div>
      <AiOutlineRight size={19} />
    </div>
  );
};

export default NavHeader;
