let lbl = document.getElementById('countlbl')
let plusbtn = document.getElementById('plus')
let minusbtn = document.getElementById('minus')
let resetBtn = document.getElementById('reset')
let count = 0;
plusbtn.onclick = function(){
   count++;
   countlbl.textContent = count;
}
minusbtn.onclick = function(){
   count--;
   countlbl.textContent = count;
}
resetBtn.onclick = function(){
   count = 0;
   countlbl.textContent = count;
}
