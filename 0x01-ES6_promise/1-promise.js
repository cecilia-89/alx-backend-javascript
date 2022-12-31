const getFullResponseFromAPI = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve(
        {
          status: 200, body: 'success',
        }
      );
    } else {
      reject('The fake API is not working currently');
    }
  });
};
