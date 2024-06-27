'use client';

import Image from 'next/image';
import BalanceRegisterItem from '@/features/register/components/BalanceRegisterItem';
import Button from '@/components/Button';
import { useRegisterForm } from '@/utils/registerSchema';

const Register = () => {
  const { register, handleSubmit, errors } = useRegisterForm();
  const handleSubmitForm = () => alert('성공했습니다.');

  return (
    <form className="px-4 py-5" onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="mb-5">
        <BalanceRegisterItem side="left" register={register} errors={errors} />
        <Image src="/svgs/verse.svg" className="mx-auto" alt="vs" width={64} height={96} />
        <BalanceRegisterItem side="right" register={register} errors={errors} />
      </div>

      <Button $width="w-full">등록</Button>
    </form>
  );
};

export default Register;
