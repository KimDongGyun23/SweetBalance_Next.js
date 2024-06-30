const PATH = process.env.NEXT_PUBLIC_BASE_URL;

const GET = {
  getComment(id: string | number) {
    return fetch(`${PATH}/goldbalance/${id}/comment`);
  },
};

const COMMENT_API = {
  GET,
};

export default COMMENT_API;
