/* eslint-disable  no-unused-vars */
export default function getFullResponseFromAPI(bool) {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve(
        {
          status: 200,
          body: 'success',
        }
      );
    }
    reject(new Error('The fake API is not working currently'));
  });
};
