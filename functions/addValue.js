const addValue = (arr, idx, value) => {
  const first = arr.slice(0, idx);
  first.push(value);

  return first.concat(arr.slice(idx, arr.length));
};

export default addValue;
