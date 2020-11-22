let kula = document.querySelector("#kula");
let dziura = document.querySelector("#dziura")
let plansza = document.querySelector("#plansza");
document.querySelector("#btnstart").addEventListener('click',Start);

let prX =0; // prędkość X
let prY =0; //prędkość Y
let poX =250; // pozycja X
let poY=250; //pozycja Y
let dziurapoX=20;
let dziurapoY=20;
function Start(){ //funkcja rozpoczęcia gry
window.addEventListener('deviceorientation', orintacjaUrzadzenia);
}

function orintacjaUrzadzenia(e){
console.log(e);
prX=e.gamma/45
prY=e.beta/45
przesuwaniekuli();
console.log(prX,prY);
}
function przesuwaniekuli(){ //poruszanie się kuli po planszy
    if(poX+prX<window.innerWidth-50 && poY+prX>0){  
        poX+=prX;
        kula.style.left=poX+'px';     
        console.log("działa");   
    }
    if(poY+prY<window.innerHeight-50 && poY+prY>0){
        poY+=prY;
        kula.style.top=poY+'px';        
    }
    

    
}
