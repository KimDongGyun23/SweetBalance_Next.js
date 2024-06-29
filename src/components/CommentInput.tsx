import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const CommentInput = () => {
  return (
    <div className="flexAlign mt-1 h-[43px] rounded-md bg-white px-[10px] py-1 text-[18px]">
      <input
        className="placeholder-center mr-1 flex-1 border-none text-base text-gray-100 outline-none"
        placeholder="댓글을 입력해주세요."
      />
      <AiOutlineSend className="cursor-pointer" />
    </div>
  );
};

export default CommentInput;
