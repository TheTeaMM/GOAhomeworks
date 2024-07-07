
let cvladi = document.getElementById("btn")
let cvladi2 = document.getElementById("p")
let random = Math.floor(Math.random() * 10 )

cvladi.addEventListener("click" , function(){
     cvladi2.textContent = random
     
})