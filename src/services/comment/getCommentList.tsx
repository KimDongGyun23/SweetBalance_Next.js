import COMMENT_API from '@/apis/commentApi';

export const getCommentList = async (id: string | number) => {
  try {
    const response = await COMMENT_API.GET.getComment(id);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error: any) {
    throw new Error('Error fetching data');
  }
};
