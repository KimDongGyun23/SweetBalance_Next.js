const PATH = process.env.NEXT_PUBLIC_BASE_URL;

const POST = {
  createBalance() {
    return fetch(`${PATH}/goldbalance/posts/make`);
  },
};

const REGISTER_API = {
  POST,
};

export default REGISTER_API;
