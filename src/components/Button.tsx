import { ButtonProps } from '@/types/commonType';

const Button = ({ $width, disabled = false, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`${$width} rounded-lg bg-blue-400 p-1 text-lg text-white`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
