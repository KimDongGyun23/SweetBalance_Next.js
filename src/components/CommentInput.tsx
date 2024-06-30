'use client';

import { CommentInputType } from '@/types/commentType';
import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const CommentInput = ({ onClick }: CommentInputType) => {
  const [comment, setComment] = useState<string>('');
  const handleClick = async () => {
    await onClick(comment);
    setComment('');
  };

  return (
    <div className="flexAlign mt-1 h-[43px] rounded-md bg-white px-[10px] py-1 text-[18px]">
      <input
        className="placeholder-center mr-1 flex-1 border-none text-base text-gray-100 outline-none"
        value={comment}
        placeholder="댓글을 입력해주세요."
        onChange={(e) => setComment(e.target.value)}
      />
      <AiOutlineSend className="cursor-pointer" onClick={handleClick} />
    </div>
  );
};

export default CommentInput;
