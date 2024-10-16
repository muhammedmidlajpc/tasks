const rmvspace = (str) => {
  let nstr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      nstr += str[i];
    }
  }
  return nstr;
};
console.log(rmvspace("m i d laj"));
