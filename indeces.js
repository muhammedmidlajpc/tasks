const indeces = (arr, target) => {
  let idx = 0;
  const indeces = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        indeces[idx] = i;
        idx++;
        indeces[idx] = j;
        return indeces
      }
    }
  }
};
console.log(indeces([1, 2, 3, 4, 5], 5));
