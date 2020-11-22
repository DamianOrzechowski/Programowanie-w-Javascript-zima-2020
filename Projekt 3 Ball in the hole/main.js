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
pozycjaStart();
}
function Koniec(){//funkcaj konca
    
    Start()
}

function pozycjaStart(){ //ustawienie pozycji startowej
poY = Math.floor(Math.random()*window.innerHeight);
poX = Math.floor(Math.random()*window.innerWidth);
dziurapoX = Math.floor(Math.random()*window.innerWidth);
dziurapoY = Math.floor(Math.random()*window.innerHeight);
dziura.style.left = dziurapoX + 'px';
dziura.style.top = dziurapoY + 'px';
kula.style.left = poX + 'px';
kula.style.top = poY + 'px';



}

function orintacjaUrzadzenia(e){

prX=e.gamma/45
prY=e.beta/45
przesuwaniekuli();

}
function przesuwaniekuli(){ //poruszanie się kuli po planszy
    if(poX+prX<window.innerWidth-50 && poY+prX>0){  
        poX+=prX;
        kula.style.left=poX+'px';        
    }
    if(poY+prY<window.innerHeight-50 && poY+prY>0){
        poY+=prY;
        kula.style.top=poY+'px';        
    }
    if(Math.abs((poY - dziurapoY)) < 6 && Math.abs((poX - dziurapoX)) <6){//sprawdzenie
        console.log("koniec")
        Koniec();
    }

    
}
