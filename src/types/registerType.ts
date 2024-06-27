import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface BalanceRegisterItemProps {
  side: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
