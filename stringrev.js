const str = "midlaj";
function revstring(str) {
  let rev = "";
  const l = str.length;
  for (i = l - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
revstring(str);
console.log(revstring(str));