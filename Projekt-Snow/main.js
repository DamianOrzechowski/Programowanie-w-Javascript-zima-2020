//pobranie canvas
let canvas = document.querySelector('#canvas')
//ustawienie ramki 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let y = 0;
let size = (Math.random()*8)+1;
//randomowy start 
let x = Math.random()*window.innerWidth;
function anime(){
    requestAnimationFrame(anime)
    console.log("dziala")
    c.clearRect(0,0,innerWidth,innerHeight)
    //var x = Math.random() * window.innerWidth;
    
    
    c.beginPath();
    //c.arc(x,0,5,0,Math.PI * 2,false); - wysztkie kulki są u góry 
    c.arc(x,y,size,0,Math.PI * 2,false);
    c.fillStyle = "white";
    //wypełnienie śnieżki na biało 
    c.fill();
    //y to prędkość 
    y+=5;
}
anime();