const chord = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let l = arr[i].length;
    if (arr[i][l-1] !== "7") {
      arr[i] += 7;
    }
  }
  return arr
};
console.log(chord(["g","f7","c7"]))