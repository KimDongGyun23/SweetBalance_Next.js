const PATH = process.env.NEXT_PUBLIC_BASE_URL;

const GET = {
  infinityList(subject: string, cursor: number) {
    return fetch(`${PATH}/goldbalance/posts/${subject}?cursor=${cursor}`);
  },
};

const LIST_API = {
  GET,
};

export default LIST_API;
