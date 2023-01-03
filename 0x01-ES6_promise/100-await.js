import { createUser, uploadPhoto } from './utils.js';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }

  return {
    photo,
    user,
  };
}


const test = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

test();