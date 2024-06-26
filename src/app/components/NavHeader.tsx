import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

interface NavHeaderProps {
  children: React.ReactNode;
}

const NavHeader = ({ children }: NavHeaderProps) => {
  return (
    <div className="flexAlign gap-1">
      <div>{children}</div>
      <AiOutlineRight size={19} />
    </div>
  );
};

export default NavHeader;
