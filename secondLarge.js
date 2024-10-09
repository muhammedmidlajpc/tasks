const secondLarge = (arr) => {
  l = arr.length;
  if (l < 2) {
    return null;
  }
  let largest = arr[0];
  let secondLargest = arr[0];
  for (i = 0; i < l; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};
console.log(secondLarge([5]));
