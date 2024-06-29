import Bubble from '@/features/comment/components/Bubble';
import BubbleFooter from '@/features/comment/components/BubbleFooter';
import React from 'react';

const Comment = () => {
  return (
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
  );
};

export default Comment;
