import ClassRoom from './0-classroom';

export default function initializeRooms(){
  const obj = [];

  [19, 20, 34].forEach((num) => {
    obj.push(new ClassRoom(num));
  });

  return obj;
};
