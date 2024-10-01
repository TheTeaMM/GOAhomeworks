let array = ["3"];
array.splice(1, 0, "4", "5");

array.unshift("1", "2");

let mapobj = [
    { id: '0', name: 'nikoloz' },
    { id: '1', name: 'andria' },
    { id: '2', name: 'buba' },
    { id: '3', name: 'shio' },
    { id: '4', name: 'temo' },
];

mapobj.forEach(obj => console.log(obj.name));

console.log(mapobj.name); 
const p3 = document.getElementById("p3");
p3.textContent = array.join(", ");
