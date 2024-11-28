const zero = (n) => {
  let arr = [];
  let idx = 0;
  const m = (n / 2) | 0;
  for (let i = 1; i <= m; i++) {
    arr[idx] = i;
    idx++;
    arr[idx] = -i;
    idx++
  }
  if (n % 2 !== 0) {
    arr[idx] = 0;
  }
  return arr;
};
console.log(zero(6));
