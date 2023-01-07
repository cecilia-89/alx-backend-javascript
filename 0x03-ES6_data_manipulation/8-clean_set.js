const cleanSet = (set, startString) => {
  if (startString === '') return '';

  const result = [...set]
    .filter((item) => item !== undefined
    .filter((item) => item.startsWith(startString))
    .map((ele) => ele.replace(startString, '')));

  return result.join('-');
};

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(cleanSet(new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']), 'id-'))

// export default cleanSet;
