import Bubble from '@/features/comment/components/Bubble';
import BubbleFooter from '@/features/comment/components/BubbleFooter';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Comment = () => {
  return (
    <>
      <div
        className={`flexColumn flex-1 gap-[10px] overflow-x-hidden overflow-y-scroll p-3 scrollbar-hide`}
      >
        {[...Array(15)].map((_, index) => (
          <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`} key={index}>
            <div className="flexColumn gap-1">
              <Bubble sideInfo={index % 2} />
              <BubbleFooter sideInfo={index % 2} />
            </div>
          </div>
        ))}
      </div>
      <div className="flexAlign mt-1 h-[43px] rounded-md bg-white px-[10px] py-1 text-[18px]">
        <input
          className="placeholder-center mr-1 flex-1 border-none text-base text-gray-100 outline-none"
          placeholder="댓글을 입력해주세요."
        />
        <AiOutlineSend className="cursor-pointer" />
      </div>
    </>
  );
};

export default Comment;
