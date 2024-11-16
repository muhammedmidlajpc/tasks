const fibanacci = (l) => {
  let fib = [0, 1];
  let even = [];
  let idx = 0;
  for (i = 0; i < l; i++) {
    if (fib[i] + fib[i + 1] <= l) {
      fib[i + 2] = fib[i] + fib[i + 1];
    } else break;
  }
  for (j = 0; j < fib.length; j++) {
    if (fib[j] % 2 === 0) {
      even[idx] = fib[j];
      idx++;
    }
  }

  return even;
};
console.log(fibanacci(50));
