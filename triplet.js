const triplet = (a, b, c) => {
  let l1;
  let l2;
  let l3;
  if (a > b) {
    if (b > c) {
      l1 = a;
      l2 = b;
      l3 = c;
    } else {
      l1 = a;
      l2 = c;
      l3 = b;
    }
  } else if (b > c) {
    if (a > c) {
      l1 = b;
      l2 = a;
      l3 = c;
    } else {
      l1 = b;
      l2 = c;
      l3 = a;
    }
  } else {
    l1 = c;
    l2 = b;
    l3 = a;
  }
  if (l3 * l3 + l2 * l2 == l1 * l1) {
    return true;
  } else {
    return false;
  }
};
console.log(triplet(5, 1, 2));
