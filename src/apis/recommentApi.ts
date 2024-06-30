import { SendingCommentType } from '@/types/commentType';

const PATH = process.env.NEXT_PUBLIC_BASE_URL;

const GET = {
  getRecomment(postId: string | number, commentId: string | number) {
    return fetch(`${PATH}/goldbalance/${postId}/recomment/${commentId}`);
  },
};

const POST = {
  postRecomment(comment: SendingCommentType, postId: string | number) {
    return fetch(`${PATH}/goldbalance/${postId}/recomment/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
  },
};

const RECOMMENT_API = {
  GET,
  POST,
};

export default RECOMMENT_API;
