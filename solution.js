// 1
console.log(3 == "3");
console.log(3 === "3");
console.log(
  `1. To compare VALUE, we can use options 2 and 3, where the equality operatos == or ===`
);
console.log(
  `1.7 - 7 is correct, we must use the strict equality operator to compare both value and type.`
);
console.log(
  `1.9 - 9 is correct, the = operator is used to assign a value to a variable.`
);

// 2
let myVar = true;
console.log(`2. ${!myVar ? "good morning" : "good evening"}`);

// 3
let firstName = "" || "John" || 0;
let emptyStr = "" && false && "Hello World";
let zero = "" || false || 0;
let seven = 75 && "nine" && 7;

console.log(firstName, zero, emptyStr, seven);
