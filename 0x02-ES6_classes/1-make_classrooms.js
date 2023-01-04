import ClassRoom from './0-classroom.js';

const initializeRooms = () => {
  const obj = [];

  [19, 20, 34].forEach((num) => {
    obj.push(new ClassRoom(num));
  });

  return obj;
};

console.log(initializeRooms());
