const prompt = require("prompt-sync")();
const factorialPromt = () => {
    let factorial=1
  const num = Number(prompt("enetr a +ve number:"));
  if (num < 0) {
    console.log("enter a +ve number !");
  } else if (num == 1 || num == 0) {
    console.log("factorial is 1")
  }else{
    for (let i = num; i > 0; i--) {
         factorial*=i
    }
    console.log(factorial)
  }
};
factorialPromt()