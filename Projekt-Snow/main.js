//pobranie canvas
let canvas = document.querySelector('#canvas')
//ustawienie ramki 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function SnowFlake(x,y,speed,size){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;

    //funkcja pojawienia się śnieżki 
    this.letitsnow = function(){
     c.beginPath();
     c.arc(this.x,this.y,this.size,0,Math.PI*2,false);
     c.fillStyle ="white";
     c.fill();
    }
    //funkcja zapętlenia śnieżek
    this.snowLoop = function(){
        this.letitsnow();
        if(this.y > innerHeight){
        x= Math.random()*window.innerWidth;
        y=0;
        }
        this.y += this.speed;
    }

}

let snowArray = [];
for(let i = 0; i <90;i++){
let x = Math.random()*innerWidth;
let y = 0;
let speed = Math.floor(Math.random()*4)+1;
let size = Math.floor(Math.random()*4)+1;
snowArray.push(new SnowFlake(x,y,speed,size));
}

function animateSnow(){
    requestAnimationFrame(animateSnow);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (let i = 0; i < snowArray.length;i++){
        snowArray[i].snowLoop();
    }

}
animateSnow();

/*let y = 0;
let size = (Math.random()*8)+1;
//randomowy start 
let x = Math.random()*window.innerWidth;
function anime(){
    requestAnimationFrame(anime)
    c.clearRect(0,0,innerWidth,innerHeight)
    //var x = Math.random() * window.innerWidth;
    
    
    c.beginPath();
    //c.arc(x,0,5,0,Math.PI * 2,false); - wysztkie kulki są u góry 
    c.arc(x,y,size,0,Math.PI * 2,false);
    c.fillStyle = "white";
    //wypełnienie śnieżki na biało 
    c.fill();

    //funkcja która odtwarza śnieg od nowa
    if (y > innerHeight){
        x= Math.random()*window.innerWidth;
        y=0;

    } 
    //y to prędkość 
    y+=5;
}
let letitsnow =[];

for (let i =0; i<100;i++){
    let
}
    

anime();*/



