//1
roll.onclick = function(){
  document.getElementById("num").innerHTML = Math.floor(Math.random() * 100)
 }


//2

 let roll2 = document.getElementById('roll2');
roll2.addEventListener('click', function() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    const element = document.getElementById('hexcolor');
    element.textContent = randomColor;
})
let colors = ['#964B00', '#008000', '#FF0000', '#00CED1'];


