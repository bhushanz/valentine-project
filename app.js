const b = document.querySelector('.btn-2')
const a = document.querySelector('.btn-1')
let  img1= document.querySelector('.img1')
let  img2= document.querySelector('.img2')
let img3 = document.querySelector('.img3')
var heart = document.querySelector('.box')
let line = document.querySelector('h1')
let beat = document.querySelector(".heart")
 
b.addEventListener("mousemove", moveHover)

function moveHover(){
      
    const i = Math.floor(Math.random()*200)+1;
    const j = Math.floor(Math.random()*200)+1;
    b.style.left = i  +'px';
    b.style.top = j +'px';
}

a.addEventListener('click', function(){
    img1.style.display = 'none';
    img2.style.display = 'block';
    b.style.display= 'none';
    a.style.display= 'none';

    line.innerHTML="Happy Valentine day !!!!!";
    line.style.fontSize = '2.2rem';

    beat.style.display ="none";
})

b.addEventListener('click', function(){
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'block';
    b.style.display= 'none';
    a.style.display= 'none';
    
    line.innerHTML=" Hate YoUUUUUUUU !!!!!";

})


