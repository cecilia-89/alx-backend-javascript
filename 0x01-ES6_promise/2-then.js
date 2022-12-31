/* eslint-disable  no-unused-vars */
export default function handleResponseFromAPI(promise) {
  new Promise((resolve, reject) => {
    if (promise) {
      resolve(
        {
          status: 200, body: 'success',
        }
      );
    } else if(!promise) {
      reject();
    }
  }).then((param) => {
    return param;
  } ).catch((message) => {
    console.log(message);
  }).then(() => {
    console.log('Got a response from the API');
  });
}
