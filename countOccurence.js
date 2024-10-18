const occurence = (arr, trgt) => {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == trgt) {
      count++;
    }
  }
  return count;
};
console.log(occurence([1,2,3,4,5,1,1,1],1));
