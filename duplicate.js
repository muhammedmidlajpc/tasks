// function duplicate(str) {
//   let duplicate = str.filter((ele, idx) => {
//     return str.indexOf(ele) !== idx;
//   });
//   return duplicate;
// }
// const arr = [1, 2, 3, 4, 5, 1, 3, 5];
// console.log(duplicate(arr));

// const arr = [1, 1, 1, 2, 3, 4, 5, 5, 1, 3, 3, 5];
// let l = arr.length;
// function duplicate(arr) {
//   const duplicate = [];
//   let idx = 0;
//   const ld = duplicate.length - 1;
//   for (i = 0; i <= l - 1; i++) {
//     for (j = i + 1; j <= l - 1; j++) {
//       if (arr[i] == arr[j]) {
//         idx2 = 0;
//         for (k = 0; k <= ld; k++) {
//           if (duplicate[idx2 -k] !== arr[i]) {
//             duplicate[idx] = arr[j];
//             idx++;
//             const ld = duplicate.length - 1;
//           }
//         }
//       }
//     }
//   }
//   return duplicate;
// }
// console.log(duplicate(arr));



const arr = [1, 1, 1, 2, 3, 4, 5, 5, 1, 3, 3, 5];
let l = arr.length;
function duplicate(arr) {
  let duplicate = [];
  let idx = 0;
  for (i = 0; i < l; i++) {
    let isexist = false;
    for (d = 0; d < duplicate.length; d++) {
      if (arr[i] === duplicate[d]) {
        isexist = true;
        break;
      }

    }
    if(isexist){
      continue
    }
    for(j=i+1;j<l;j++){
      if(arr[i]==arr[j])
      {
        duplicate[idx]=arr[i]
        idx++
        break
      }
    }
  }
  return duplicate
}

console.log(duplicate(arr));
