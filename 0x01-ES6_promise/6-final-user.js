import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];
  const list = [];
  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          list.push({ status: result.status, value: result.value });
        } else {
          list.push({ status: result.status, value: `${result.reason}` });
        }
      });
      return list;
    });
}
