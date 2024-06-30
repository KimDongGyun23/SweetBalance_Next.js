const PATH = process.env.NEXT_PUBLIC_BASE_URL;

const GET = {
  getRecomment(postId: string | number, commentId: string | number) {
    return fetch(`${PATH}/goldbalance/${postId}/recomment/${commentId}`);
  },
};

const RECOMMENT_API = {
  GET,
};

export default RECOMMENT_API;
