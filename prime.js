const prime = (num) => {
  if (num > 1) {
    console.log(num);
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};
console.log(prime(4));
