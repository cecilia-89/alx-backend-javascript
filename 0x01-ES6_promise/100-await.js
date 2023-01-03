import { createUser, uploadPhoto } from './utils.js';

export default async function asyncUploadUser() {
  let photo = await uploadPhoto();
  let user = await createUser();
  try {
    photo;
    user;
  } catch (err) {
    console.log(err)
  }

  return {
    photo,
    user,
  };
}
