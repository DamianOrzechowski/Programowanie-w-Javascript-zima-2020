//pobranie canvas
var canvas = document.querySelector('#canvas')
//ustawienie ramki 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
/*for (let i = 0; i < 5; i++) {
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var size = Math.random()*8;
c.beginPath();
//c.arc(x,0,5,0,Math.PI * 2,false); - wysztkie kulki są u góry 
c.arc(x,y,size,0,Math.PI * 2,false);
c.fillStyle = "white";
//wypełnienie śnieżki na biało 
c.fill();
}*/
//funkacja która będzie animować
var y = 0;
var size = Math.random()*8;
var x = 10;
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

