const nw = (str) => {
  let count = 0;
  let l = str.length;
  let inword = true;
  for (i = 0; i < l; i++) {
    if (str[i] != " " && inword) {
      count++;
      inword = false;
    } else if (str[i] == " ") {
      inword = true;
    }
  }
  return count;
};
console.log(nw("hello my name   is midlaj  "));
