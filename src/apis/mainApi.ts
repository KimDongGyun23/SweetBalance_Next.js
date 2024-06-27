const PATH = process.env.NEXT_PUBLIC_BASE_URL;

const GET = {
  main() {
    return fetch(`${PATH}/goldbalance/home`);
  },
};

const MAIN_API = {
  GET,
};

export default MAIN_API;
