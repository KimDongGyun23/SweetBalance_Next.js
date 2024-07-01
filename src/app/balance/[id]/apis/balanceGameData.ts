import BALANCE_API from '@/apis/balanceApi';
import { BalanceDataType } from '@/types/balanceType';
import { useEffect, useState } from 'react';

const balanceGameData = async (id: string) => {
  try {
    const response = await BALANCE_API.GET.balance(id);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export default balanceGameData;
