const zero = (arr) => {
  let narr = [];
  let idx = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      narr[idx] = arr[i];
      idx++;
    }
  }
  for (j = 0; j < arr.length; j++) {
    if (arr[j] == 0) {
      narr[idx] = arr[j];
      idx++;
    }
  }
  return narr;
};
console.log(zero([1, 0, 3, 0, 4, 4, 0, 0, 2, 4]));
