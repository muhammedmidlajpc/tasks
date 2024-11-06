const prompt = require("prompt-sync")();
const retangle = () => {
  const width = Number(prompt("enter the width of rectangle:-"));
  const length = Number(prompt("enter the length of rectangle:-"));
  if (width <= 0 || length <= 0) {
    console.log("enetr a valid length and width!");
  } else {
    const area = width * length;
    const perimeter = 2*(length + width);
    console.log(length,width,area,perimeter)
    console.log(`area is ${area}`);
    console.log(`perimeter is ${perimeter}`);
  }
};
retangle();
