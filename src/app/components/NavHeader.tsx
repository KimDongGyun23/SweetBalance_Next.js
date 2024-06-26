import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const NavHeader = ({ children }: ChildrenProps) => {
  return (
    <div className="flexAlign mb-4 gap-1">
      <div className="text-xl font-semibold">{children}</div>
      <AiOutlineRight size={19} />
    </div>
  );
};

export default NavHeader;
