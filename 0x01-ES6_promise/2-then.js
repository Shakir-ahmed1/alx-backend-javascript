export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    const obj = {
      status: 200,
      body: 'success',
    };
    return obj;
  }).catch(() => new Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
