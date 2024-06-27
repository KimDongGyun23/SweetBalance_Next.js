import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  leftSideTitle: z.string().max(20, { message: '주제는 20글자 이하입니다.' }),
  rightSideTitle: z.string().max(20, { message: '주제는 20글자 이하입니다.' }),
  leftSideDetail: z.string().max(45, { message: '추가 설명은 45글자 이하입니다.' }),
  rightSideDetail: z.string().max(45, { message: '추가 설명은 45글자 이하입니다.' }),
});

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, errors };
};
