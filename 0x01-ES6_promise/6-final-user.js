import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(filename);
  const promises = [user, photo];
  return Promise.allSettled(promises).then((values) => {
    const list = [
      {
        status: values[0].status,
        value: values[0].value,
      },
      {
        status: values[1].status,
        value: values[1].value,
      },
    ];
    return list;
  });
}
