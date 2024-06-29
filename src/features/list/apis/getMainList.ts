import LIST_API from '@/apis/listApi';

const getBalanceList = async (subject: string, cursor: number) => {
  try {
    const response = await LIST_API.GET.infinityList(subject, cursor);
    if (!response.ok) {
      console.error('Failed to fetch data');
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
};

export default getBalanceList;
