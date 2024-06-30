import RECOMMENT_API from '@/apis/recommentApi';
import { SendingCommentType } from '@/types/commentType';

const postRecomment = async (comment: SendingCommentType, postId: string | number) => {
  try {
    const response = await RECOMMENT_API.POST.postRecomment(comment, postId);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export default postRecomment;
