import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

interface NavHeaderProps {
  children: React.ReactNode;
}

const NavHeader = ({ children }: NavHeaderProps) => {
  return (
    <div className="flexAlign mb-4 gap-1 text-xl font-semibold">
      <div>{children}</div>
      <AiOutlineRight size={19} />
    </div>
  );
};

export default NavHeader;
