let kula = document.querySelector("#kula");
let plansza = document.querySelector("#dziura");
window.addEventListener('deviceorientation', orintacjaUrzadzenia);
let prX =0; // prędkość X
let prY =0; //prędkość Y
let poX =20; // pozycja X
let poY=20; //pozycja Y
function orintacjaUrzadzenia(e){
console.log(e);
prX=e.gamma/45
prY=e.beta/45
przesuwaniekuli();
console.log(prX,prY);
}
function przesuwaniekuli(){
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
