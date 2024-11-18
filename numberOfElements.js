const numberOfElements = (arr) => {
  let n = [];
  let len = arr.length;
  for (i = 0; i < len; i++) {
    let count = 0;
    for (let j = 0; j < len; j++) {
      if (arr[i] > arr[j]) {
        count++;
        n[i] = count;
      }else if (count===0) {
        n[i]=0
      }
    }
  }
  return n;
};
console.log(numberOfElements([8, 2, 2, 1]));
