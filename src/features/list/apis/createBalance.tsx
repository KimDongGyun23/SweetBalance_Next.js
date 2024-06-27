import REGISTER_API from '@/apis/registerApi';

const getMainList = async () => {
  try {
    const response = await REGISTER_API.POST.createBalance();
    if (!response.ok) {
      console.error('Failed to fetch data');
      return [];
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default getMainList;
