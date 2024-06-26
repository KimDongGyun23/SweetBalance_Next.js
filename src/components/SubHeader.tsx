import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

const SubHeader = ({ children }: ChildrenProps) => {
  return (
    <div>
      <AiOutlineLeft />
      <div>{children}</div>
    </div>
  );
};

export default SubHeader;
