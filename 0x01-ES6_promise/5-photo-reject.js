export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    const err = new Error(`${filename} cannot be processed`);
    reject(err);
  });
}
