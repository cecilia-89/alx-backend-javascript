const getStudentsByLocation = (list, city) => {
  if (typeof city !== 'string') {
    throw new TypeError('city must a string');
  }
  return list.filter((ele) => ele.location === city);
};

export default getStudentsByLocation;
