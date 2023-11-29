import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await uploadPhoto();
    const photo = await createUser();
    return {
      photo,
      user,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
