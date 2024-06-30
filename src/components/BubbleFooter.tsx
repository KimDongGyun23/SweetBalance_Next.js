'use client';
import { BubbleFooterType } from '@/types/commentType';
import { usePathname, useRouter } from 'next/navigation';
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';

const BubbleFooter = ({ commentId, recommentId, sideInfo }: BubbleFooterType) => {
  const path = usePathname();
  const router = useRouter();
  const isRecomment = path.includes('recomment');

  return (
    <div
      className={`flex ${sideInfo === 0 ? 'justify-end' : 'justify-start'} gap-[7px] text-xs text-gray-100`}
    >
      {!isRecomment && (
        <div
          className="flexAlign cursor-pointer gap-[1px]"
          onClick={() => router.push(`/comment/${commentId}/recommnet/${recommentId}`)}
        >
          <span>15</span>
          <AiOutlineComment />
        </div>
      )}

      <div className="flexAlign cursor-pointer gap-[1px]">
        <span>13</span>
        <AiOutlineHeart />
        {/* {like === 1 ? <AiFillHeart fill="red" /> : <AiOutlineHeart />} */}
      </div>
    </div>
  );
};

export default BubbleFooter;
