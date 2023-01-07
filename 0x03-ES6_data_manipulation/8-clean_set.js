const cleanSet = (set, startString) => {
  if (startString === '') return '';

  const result = [...set]
    .filter((item) => item.startsWith(startString))
    .map((ele) => ele.replace(startString, ''));

  return result.join('-');
};

export default cleanSet;
