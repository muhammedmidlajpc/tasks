const countOddEven = (arr) => {
  const l = arr.length;
  let odd = 0;
  let even = 0;
  for (i = 0; i, i < l; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else { 
      odd++;
    }
  }
  return  ({odd,even})
};
console.log(countOddEven([1, 4, 6, 2, 3, 9, 44, 3, 5, 1]));
