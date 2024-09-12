const str = "midlaj";
const vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
const l = str.length;
let vowelc =0
function vowelcount() {
  for (i = 0; i < l; i++) {
    for(j=0;j<10;j++){
        if(str[i]==vowel[j]){
            vowelc++
        }
    }
  }
  return vowelc
}
console.log(vowelcount(str));
