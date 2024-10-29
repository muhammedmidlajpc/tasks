const multiple_replace = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      arr[i] = 0;
    } else if (arr[i] % 5 == 0) {
      arr[i] = 1;
    }
  }
  return arr;
};
console.log(multiple_replace([3, 6, 5, 1, 2, 10, 9]));
