const input = require("prompt-sync")();
const agefinder = () => {
  const year = input("eneter your dob:-");
  const date = new Date();
  const currentyear = date.getFullYear();
  if (year < currentyear) {
    const age = 2024 - year;
    console.log(age);
    
  } else {
    console.log("enter a valid year");
  }
};
agefinder();
