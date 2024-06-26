import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

const SubHeader = ({ children }: ChildrenProps) => {
  return (
    <div className="flexAlign gap-1">
      <AiOutlineLeft size={19} />
      <p className="text-xl font-semibold">{children}</p>
    </div>
  );
};

export default SubHeader;
