
// დავალება 1

function family (Mynameage = 'Buba 12' , Mydadnameage = '42 Mamuka' , Mymomnameage = '34 Diana' , Mybrothenamerage = '8 Saba') {
    console.log(`hello my name  and age is ${Mynameage} My dad name and age is ${Mydadnameage} My Mom name and age is ${Mymomnameage} My brother name and age is ${Mybrothenamerage}`)
}
family()
//დავალება 2 
function family (Mynameage = 'Buba 12' , Mydadnameage = '42 Mamuka' , Mymomnameage = '34 Diana' , Mybrothenamerage = '8 Saba') {
    console.log(`hello my name  and age is ${Mynameage} My dad name and age is ${Mydadnameage} My Mom name and age is ${Mymomnameage} My brother name and age is ${Mybrothenamerage}`)
    let family = prompt("Please Enter your Age and Name", "Buba 12");
    if (family !=null) {
        document.getElementById("first").innerHTML =
        "Hello " + family + "lets go to Germany";
    }
}

// They Leaved Georgia to 10Years and They was Germany 
// function myFunction() {
//     let person = prompt("Please enter your name", "Harry Potter");
//     if (person != null) {
//       document.getElementById("demo").innerHTML =
//       "Hello " + person + "! How are you today?";
//     }
//   }
//დავალება 3
function square(n) {
    console.log(n*n);
}
square()