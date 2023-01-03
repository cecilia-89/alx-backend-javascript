import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let photo = await uploadPhoto();
  let user = await createUser();
  try {
    photo;
    user;
  } catch (err) {
    photo = null;
    user = null;
  }

  return {
    photo,
    user,
  };
}
