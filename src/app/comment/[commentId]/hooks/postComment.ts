import COMMENT_API from '@/apis/commentApi';
import { SendingCommentType } from '@/types/commentType';

const postComment = async (comment: SendingCommentType, postId: string | number) => {
  try {
    console.log(comment, postId);
    const response = await COMMENT_API.POST.postComment(comment, postId);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export default postComment;
