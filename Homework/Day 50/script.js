// 1
function numberToString(num) {
    return num.toString();
  }

// 2
const stringToNumber = function(str){
  return Number(str)
}
// 3 
function simpleMultiplication(number) {
  if (number % 2 == 0 ){
   return number*8
 } else {
   return number*9

 }
}
// 4 
function booleanToString(b){
  return String(b)
}
//5



// Last Homework 
let a = Number(prompt('Tell me your Age!'))
  if (a < 18){
     alert('You so young You need to be 18+')
  }
  else {
    alert('Okay good Job Sir.')
  }
let b = prompt('Tell me your Email')
let c = Number(prompt('Tell me your Password With Numbers'))
if (c < 1) {
  alert("you have permission ")
}
else {
  alert("You don't have permission")
}