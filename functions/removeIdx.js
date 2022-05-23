const removeIdx = (arr, idx) => {
  return arr.slice(0, idx).concat(arr.slice(idx + 1, arr.length));
};

export default removeIdx;
