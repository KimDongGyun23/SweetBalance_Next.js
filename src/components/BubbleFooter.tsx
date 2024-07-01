'use client';
import { BubbleFooterType } from '@/types/commentType';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';

const BubbleFooter = ({ commentId, comment }: BubbleFooterType) => {
  const path = usePathname();
  const isRecomment = path.includes('recomment');
  const { id: recommentId, sideInfo, likeCount, childCount } = comment;

  return (
    <div
      className={`flex ${sideInfo === 0 ? 'justify-end' : 'justify-start'} gap-[7px] text-xs text-gray-100`}
    >
      {!isRecomment && (
        <Link href={`/comment/${commentId}/recomment/${recommentId}`}>
          <div className="flexAlign cursor-pointer gap-[1px]">
            <span>{childCount}</span>
            <AiOutlineComment />
          </div>
        </Link>
      )}

      <div className="flexAlign cursor-pointer gap-[1px]">
        <span>{likeCount}</span>
        <AiOutlineHeart />
        {/* {like === 1 ? <AiFillHeart fill="red" /> : <AiOutlineHeart />} */}
      </div>
    </div>
  );
};

export default BubbleFooter;
