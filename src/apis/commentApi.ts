import { SendingCommentType } from '@/types/commentType';

const PATH = process.env.NEXT_PUBLIC_BASE_URL;

const GET = {
  getComment(id: string | number) {
    return fetch(`${PATH}/goldbalance/${id}/comment`);
  },
};

const POST = {
  postComment(comment: SendingCommentType, postId: string | number) {
    return fetch(`${PATH}/goldbalance/${postId}/comment/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
  },
};

const COMMENT_API = {
  GET,
  POST,
};

export default COMMENT_API;
