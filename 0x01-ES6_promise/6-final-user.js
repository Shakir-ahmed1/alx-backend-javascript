import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const promises = [user, photo];
  return Promise.allSettled(promises).then((values) => {
    const list = [
      {
        status: values[0].status,
        value: values[0].status === 'fulfilled' ? values[0].value : values[0].reason,
      },
      {
        status: values[1].status,
        value: values[1].status === 'fulfilled' ? values[1].value : values[1].reason,
      },
    ];
    return list;
  });
}
