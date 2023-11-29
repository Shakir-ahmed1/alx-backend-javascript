export default function handleResponseFromAPI(promise) {
  return promise.then((data) => {
    const obj = {
      status: 200,
      body: 'success',
    };
    return obj;
  }).catch((err) => new Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
