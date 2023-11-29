export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    const obj = {
      status: 200,
      body: 'success',
    };
    return obj;
  }, () => {
    return new Error();
  });
}
