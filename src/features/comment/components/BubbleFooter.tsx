import { BubbleType } from '@/types/commentType';
import React from 'react';
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';

const BubbleFooter = ({ sideInfo }: BubbleType) => {
  return (
    <div
      className={`flex ${sideInfo === 0 ? 'justify-end' : 'justify-start'} gap-[7px] text-xs text-gray-100`}
    >
      <div className="flexAlign cursor-pointer gap-[1px]">
        <span>15</span>
        <AiOutlineComment />
      </div>

      <div className="flexAlign cursor-pointer gap-[1px]">
        <span>13</span>
        <AiOutlineHeart />
        {/* {like === 1 ? <AiFillHeart fill="red" /> : <AiOutlineHeart />} */}
      </div>
    </div>
  );
};

export default BubbleFooter;