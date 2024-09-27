import { duplicate } from "./duplicate.mjs";
import { rmvduplicate } from "./rmvduplicat.mjs";

// const arr1 = [5, 23, 8, 2];

// const arr2 = [3, 4, 9, 1];
const mrg = (arr1, arr2) => {
  const arrm = [];
  let idx = 0;
  let temp = "";
  const l1 = arr1.length;
  const l2 = arr2.length;
  for (let i = 0; i < l1; i++) {
    arrm[i] = arr1[i];
  }
  for (let j = 0; j < l2; j++) {
    arrm[j + l1] = arr2[j];
  }
  for (let m = 0; m < l1 + l2; m++) {
    for (let s = m + 1; s < l1 + l2; s++) {
      if (arrm[s] < arrm[m]) {
        temp = arrm[s];
        arrm[s] = arrm[m];
        arrm[m] = temp;
      }
    }
  }
  return arrm;
};
// console.log(mrg([3, 5, 7, 1, 3], [2, 8, 4, 1, 5]));
const mergedarr=mrg([3, 5, 7, 1, 3], [2, 8, 4, 1, 5])
console.log(rmvduplicate(mergedarr));

