export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const obj = {
      firstName,
      lastName,
    };
    resolve(obj);
  });
}
