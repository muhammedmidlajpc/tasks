const occurence = (arr) => {
  let idx = 0;
  const count = {};
  const narr = [];
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }
  for (const key in count) {
    if (count[key] == 2) {
      narr[idx] = parseInt(key);
      idx++;
    }
  }
  return narr;
};

console.log(occurence([1, 2, 3, 2, 1, 4, 1, 3]));
