import MAIN_API from '@/apis/mainApi';

const getMainList = async () => {
  try {
    const response = await MAIN_API.GET.main();
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
