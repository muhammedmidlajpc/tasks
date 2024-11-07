const insert = (arr, p, e) => {
  let l = arr.length;
  for (let i = l; i > p; i--) {
    arr[i] = arr[i - 1];
  }
  arr[p] = e;
  return arr;
};
console.log(insert([1, 2, 4, 5], 2, 3));
