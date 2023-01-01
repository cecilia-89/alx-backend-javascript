export default function getFullResponseFromAPI(bool) {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve({
        'body': 'Success',
        'status': 200,
      });
    }
    reject(new Error('The fake API is not working currently'));
  });
}
