/* added comment to top of file */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        'body': 'Success',
        'status': 200,
      });
    }
    reject(new Error('The fake API is not working currently'));
  });
}
