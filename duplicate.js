function duplicate(str) {
  let duplicate = str.filter((ele, idx) => {
    return str.indexOf(ele) !== idx;
  });
  return duplicate;
}
const str = [1, 2, 3, 4, 5, 1, 3, 5];
console.log(duplicate(str));
