const missing = (arr) => {
  let largest = arr[0];
  let l = arr.length;
  let present;
  let narr = [];
  for (let i = 0; i < l; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  // for (let j = 1; j < largest; j++) {
  //   for (let k = 0; k < arr.length; k++) {
  //     if (j!==arr[k]) {
  //       present=false
  //     }else{
  //       present=true
  //       break
  //     }
  //   }
  //   if (!present) {
  //     arr[l]=j
  //     l=arr.length;
  //   }
  // }
  // for (let j = 0; j < largest; j++) {
  //   narr[j] = j + 1;
  // }
  // return narr;
};
console.log(missing([1, 3, 5]));
