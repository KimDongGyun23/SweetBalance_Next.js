import { SubHeaderProps } from '@/types/commonType';
import { AiOutlineInbox, AiOutlineLeft } from 'react-icons/ai';

const SubHeader = ({ icon, children }: SubHeaderProps) => {
  return (
    <div className="flexBetweenCenter mb-4 text-gray-200">
      <div className="flexAlign gap-1">
        <AiOutlineLeft size={19} />
        <p className="text-xl font-semibold">{children}</p>
      </div>

      {icon && (
        <div className="flexAlign gap-1">
          <AiOutlineInbox size={14} />
          <p className="text-xs font-bold leading-3">12</p>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
