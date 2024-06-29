const PATH = process.env.NEXT_PUBLIC_BASE_URL;

const GET = {
  balance(id: number) {
    return fetch(`${PATH}/goldbalance/posts/${id}`);
  },
};

const BALANCE_API = {
  GET,
};

export default BALANCE_API;
