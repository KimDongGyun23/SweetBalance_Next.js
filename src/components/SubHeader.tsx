'use client';

import { SubHeaderProps } from '@/types/commonType';
import changeSubjectLang from '@/utils/changeSubjectLang';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { AiOutlineInbox, AiOutlineLeft } from 'react-icons/ai';

const SubHeader = ({ isGame, icon }: SubHeaderProps) => {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  let header = '';

  if (isGame) header = params.get('subject') as string;
  else if (path.includes('register')) header = '나만의 밸런스 게임';
  else if (path.includes('comment')) header = '댓글';
  else if (path.includes('recomment')) header = '대댓글';
  else {
    const EXTRACT_HEADER = changeSubjectLang(path.replace('/list/', ''));
    header = `${EXTRACT_HEADER} Balance`;
  }

  return (
    <div className="flexBetweenCenter mb-4 text-gray-200">
      <div className="flexAlign gap-1">
        <AiOutlineLeft className="cursor-pointer" size={19} onClick={() => router.back()} />
        <p className="text-xl font-semibold">{header}</p>
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
