//1
let cvladi = document.getElementById("btn")
let cvladi2 = document.getElementById("p")

cvladi.addEventListener("click" , function(){
      cvladi2.textContent = Math.floor(Math.random() * 1000 )
})
//2
let btn = document.getElementById("btn2");
let p = document.getElementById("p2");
let area = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += area[Math.trunc(Math.random() * area.length)];
    }
    p.textContent = hex;
    document.body.style.backgroundColor = hex;
});


// let text = document.getElementById('HaxText')

// let body = document.getElementById('body')

// let click = document.getElementById('me')

// let haxText = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

// click.addEventListener('click', function(){
//     let hax = '#'
//   for(let i = 0;i<6;i++){
//      hax += haxText[Math.trunc(Math.random()*haxText.length)]
//   }

//  text.textContent = hax
//  body.style.backgroundColor = hax
// }
 

// )