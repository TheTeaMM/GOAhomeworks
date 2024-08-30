let circle = document.getElementById('circle');
let angle = 0; 
let radius = 130; 
let speed = 0.5; 

function move() {
    angle += speed;
    let x = radius * Math.cos(angle * Math.PI / 180);
    let y = radius * Math.sin(angle * Math.PI / 180);
    
    circle.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(move);
}

move();
