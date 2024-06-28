import REGISTER_API from '@/apis/registerApi';
import { FieldValues } from 'react-hook-form';

const createBalance = async (formData: FieldValues) => {
  try {
    const response = await REGISTER_API.POST.createBalance(formData);
    if (!response.ok) {
      console.error('Failed to fetch data');
      return [];
    }
    console.log('success');
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default createBalance;
