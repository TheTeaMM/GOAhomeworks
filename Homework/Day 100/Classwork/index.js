// 1)  შექმენით arry რომელიც იქ ნება მაქსიმუმ 10 ელემენტიანანი იყოს გამოერებული მინიმუმ 4 ელემენტი
let arr = [1, 2, 3, 4, 5, 6]; 

// 2) გამოვიყენოთ  new Set  და დავატოვოთ თითო ელემენტი ამ სეტში
let uniqueSet = new Set(arr);

// 3) დავამატოთ სეტში აიეემები
uniqueSet.add(11); 
uniqueSet.add(12); 

// 4) გამოვაკლოთ აითემები
uniqueSet.delete(1); 
uniqueSet.delete(2); 
// 5) გავიგოთ შეიცავს თუ არა ამ  ელემენტს ჩვენი array
console.log(arr)