import Image from 'next/image';
import BalanceRegisterItem from './components/BalanceRegisterItem';
import Button from '@/components/Button';

const Register = () => {
  return (
    <div className="px-4 py-5">
      <div className="mb-5">
        <BalanceRegisterItem />
        <div className="w-15 relative h-24">
          <Image src="/svgs/verse.svg" alt="vs" layout="fill" />
        </div>
        <BalanceRegisterItem />
      </div>

      <Button $width="w-full">등록</Button>
    </div>
  );
};

export default Register;
