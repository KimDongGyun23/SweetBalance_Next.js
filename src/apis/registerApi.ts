import { FieldValues } from 'react-hook-form';

const PATH = process.env.NEXT_PUBLIC_BASE_URL;

const POST = {
  createBalance(formData: FieldValues) {
    console.log(formData);
    return fetch(`${PATH}/goldbalance/posts/make`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  },
};

const REGISTER_API = {
  POST,
};

export default REGISTER_API;
