/* eslint-disable  no-unused-vars */
export default function getFullResponseFromAPI(bool) {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve(
        {
          status: 200,
          body: 'Success',
        }
      );
    }
    reject('The fake API is not working currently');
  });
};
