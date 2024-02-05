function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      const value = { data: 'Successful response from the API' };
      resolve(value);
    }
  });
}
module.exports = getPaymentTokenFromAPI;
// getPaymentTokenFromAPI(true).then((data) => {
//     console.log(data);
// }).catch((err)=> { console.log(err)});
