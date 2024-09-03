
// 1
const students = [
    { name: "გიგა", score: 75 },
    { name: "ნინო", score: 85 },
    { name: "სანდრო", score: 90 }
  ];
// 2
students.push({ name: "ლიკა", score: 80 });

// 3
const topStudent = students.reduce((max, student) => student.score > max.score ? student : max, students[0]);
console.log(topStudent);

// 4
const highScorers = students.filter(student => student.score > 80).map(student => student.name);
console.log(highScorers); 
