// const list = [1, 2, 3, 1, 2, 5, 1, 4, 6, 3, 2];
// export const rmvduplicate=((list)=>{
// const duplicates = list.filter((ele, idx) => {
//   return list.indexOf(ele) === idx;
//   console.log(ele);

// });
// return duplicates
// })
// // console.log(duplicates);

const rmvduplicat = (arr) => {
  let l = arr.length;
  let idx=0
  const rmvduplicat = [];
  for (let i = 0; i < l; i++) {
    let isexist = false;
    for (let j = 0; j < rmvduplicat.length; j++) {
      if (arr[i] === rmvduplicat[j]) {
        isexist = true;
        break;
      }
    }
    if(!isexist){
      rmvduplicat[idx]=arr[i]
      idx++
    }
  }
  return rmvduplicat;
};
console.log(rmvduplicat([1, 1, 2, 4, 1, 4, 6, 2]));
