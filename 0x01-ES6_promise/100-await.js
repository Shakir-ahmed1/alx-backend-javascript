import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let obj;
  try {
    const user = await uploadPhoto();
    const photo = await createUser();
    obj = {
      user,
      photo,
    };
  } catch (e) {
    obj = {
      phto: null,
      user: null,
    };
  }
  return obj;
}
