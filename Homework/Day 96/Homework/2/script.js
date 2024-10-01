// 1
let numbers = [1, 2, 3, 4, 5, 6];
console.log("Initial numbers array:", numbers);

// 2
numbers.push(7);
console.log("After adding 7 at the end:", numbers);

// 3
numbers.shift();
console.log("After removing the first element:", numbers);

// 4
let indexOfFour = numbers.indexOf(4);
console.log("Index of number 4:", indexOfFour);

// 5
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Array of even numbers:", evenNumbers);
