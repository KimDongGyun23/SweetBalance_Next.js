import RECOMMENT_API from '@/apis/recommentApi';
export const getRecommentList = async (
  commnetId: string | number,
  recommentId: string | number
) => {
  try {
    const response = await RECOMMENT_API.GET.getRecomment(commnetId, recommentId);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error: any) {
    throw new Error('Error fetching data');
  }
};
