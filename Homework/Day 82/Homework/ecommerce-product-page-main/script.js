function changeImage() {
    var mainImage = document.getElementById('product12');
    mainImage.src = 'image-product-1-thumbnail.jpg';
    mainImage.alt = 'New Image'; // Необязательно, можно поменять атрибут alt
}


let count = 0;
let rslt = document.getElementById('rslt')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')

plus.onclick = function(){
    count++;
    rslt.textContent = count;
    
}
minus.onclick = function(){
    count--;
    rslt.textContent = count;
    
}
