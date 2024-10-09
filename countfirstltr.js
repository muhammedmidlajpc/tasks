// const countfirstltr = () => {
//   const str = "hello";
//   const charCount = {};
//   for (i = 0; i < str.length; i++) {
//     console.log(charCount);

//     if (charCount[str[i]]) {
//       charCount[str[i]]++;
//     } else {
//       charCount[str[i]] = 1;
//       console.log(charCount);
//     }
//   }
// };

// const countefirstltr = () => {
//   const str = "hello";
//   const charCount = {};
//   for (i = 0; i < str.length; i++) {
//     for (j = i + 1; j; j++) {

//       if (str[i] == str[j]) {
//         charCount = { "str[i]": i };
//         console.log("y");

//         break;
//       }
//     }
//     if (charCount) {
//       break;
//     }
//   }
//   return charCount
// };
// console.log(countefirstltr());

function firstnonrepeat(str) {
  let charcount = {};
  for (i = 0; i < str.length; i++) {
   let char = str[i];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    if (charcount[char]) {
      charcount[char]++;
    } else {
      charcount[char] = 1;
    }
  }
  for (j = 0; j < str.length; j++) {
    if (charcount[str[j]] === 1) {
      return str[j];
    }
  }
  return charcount;
}
console.log(firstnonrepeat("hhello world"));

// const palindrome = () => {
//   var x = 121;
//   let temp = x;
//   var r = 0;
//   while (x > 0) {
//     r = r * 10 + (x % 10);
//     x = x / 10;
//   }
//   if (r === temp) {
//     return (true,r,temp);
//   } else {
//     return (false,r,temp);
//   }

// };
// console.log(palindrome());
// console.log(temp,r);
