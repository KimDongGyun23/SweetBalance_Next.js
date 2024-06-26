import { ButtonProps } from '@/types/commonType';

const Button = ({ $width, disabled = false, children }: ButtonProps) => {
  return (
    <button
      className={`${$width} rounded-lg bg-blue-400 p-1 text-lg text-white`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
