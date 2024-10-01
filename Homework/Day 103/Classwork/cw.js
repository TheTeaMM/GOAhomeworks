//1) შევქმანთ arr და მასზე მოვახდინოთ სხვადასხვა მეთები, გამოვიყენოთ, map, filter, find, findIndex,join, indexOf, startWith, endWith, includes 
// map
let arr = ["1", "2", "3"]
let arrd = arr.map(function (element) {
    return element *4   
})
console.log(arrd)

// filter
const numbers = [5, 11, 8, 130, 44];

const filteredNumbers = numbers.filter(number => number > 10);

console.log(filteredNumbers);

// findindex
const numbers2 = [5, 12, 8, 130, 44];
const found = numbers.find(number => number < 10);

console.log(found); 

// join
const elements = ['Dirt', 'Water', 'World'];
const joined = elements.join(' _ ');
console.log(joined); 

// indexof
const fruits = ["Apple", "Banana", "Blubbery"];

const index = fruits.indexOf('Banana');

console.log(index);
// startswith
const str = 'Hello, world!';
console.log(str.startsWith('Hello')); 

//endswith
const str1 = 'Hello, world!';

console.log(str.endsWith('world!')); 

//includes

const fruitse = ["banana", "apple", "watermelon"];


console.log(fruitse.includes('apple')); 
