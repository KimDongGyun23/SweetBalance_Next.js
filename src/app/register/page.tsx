import Image from 'next/image';
import BalanceRegisterItem from '@/features/register/components/BalanceRegisterItem';
import Button from '@/components/Button';

const Register = () => {
  return (
    <div className="px-4 py-5">
      <div className="mb-5">
        <BalanceRegisterItem />
        <Image src="/svgs/verse.svg" className="mx-auto" alt="vs" width={64} height={96} />
        <BalanceRegisterItem />
      </div>

      <Button $width="w-full">등록</Button>
    </div>
  );
};

export default Register;
