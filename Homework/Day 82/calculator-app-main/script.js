let rslt = document.getElementById('display')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let reset = document.getElementById('reset')
let display = 0;
// plus.onclick = function(){
//     display++;
//     rslt.textContent = display;
//  }
//  minus.onclick = function(){
//     display--;
//     rslt.textContent = display;
//  }
//  reset.onclick = function(){
//     display = 0;
//     rslt.textContent = display;
//  }
 const buttons = document.getElementsByClassName("button");
 let num = '1';
 for (let i = 0; i < button.length; i++) {
   button[i].addEventListener("click", function() {
     num += button[i].innerText;
     console.log(num);
   });
 }