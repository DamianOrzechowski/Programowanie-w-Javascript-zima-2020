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
        if(this.y > innerHeight){
            this.x= Math.random()*window.innerWidth;
            this.y=-10;
        }
        this.y += this.speed;
        this.letitsnow();
    }

}

let snowArray = [];
for(let i = 0; i <90;i++){
let x = Math.random()*innerWidth;
let y = -10;
let speed = Math.random()*10;
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




