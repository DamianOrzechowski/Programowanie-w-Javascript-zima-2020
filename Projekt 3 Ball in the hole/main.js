let kula = document.querySelector('#kula')
let dziura = document.querySelector('#dziura')
//let plansza = document.querySelector('#plansza')
document.querySelector('#btnstart').addEventListener('click',Start)
document.getElementById('napis').style.visibility = 'hidden'//ustawienie braku widoczności na wygrana
kula.style.visibility = 'hidden'
dziura.style.visibility = 'hidden'

let prX = 0 // prędkość X
let prY = 0 //prędkość Y
let poX = 250 // pozycja X
let poY = 250 //pozycja Y
let dziurapoX = 250
let dziurapoY = 250
//zmienne do stopera
let czas = 0
let aktczas = false
let czaspauza
const panelczas = document.querySelector('#czas')
function stoper(){
    if(!aktczas){
        aktczas = !aktczas
        czas = 0
        czaspauza = setInterval(startczas,10)
    }
    else{
        czas = 0
        aktczas = !aktczas
        //funkcja do resetowania
        // aktczas = false;
      
    }
}
const startczas = () => {
    czas++
    panelczas.textContent =(czas/100).toFixed(2)
}


function Start(){ //funkcja rozpoczęcia gry
    window.addEventListener('deviceorientation', orintacjaUrzadzenia)
    document.getElementById('napis').style.visibility = 'hidden'
    kula.style.visibility = 'visible'
    dziura.style.visibility = 'visible'
    kula.style.backgroundColor = 'red'
    dziura.style.backgroundColor = 'green'
    pozycjaStart()
    stoper()//włączenie stopera
    stoper()
}

function Wygrales(){//funkcaj końca
    document.getElementById('napis').style.visibility = 'visible'
    kula.style.visibility = 'hidden'
    dziura.style.visibility = 'hidden'
    clearInterval(czaspauza)
  
  

}

function pozycjaStart(){ //ustawienie pozycji startowej
    poY = Math.floor(Math.random()*window.innerHeight)
    poX = Math.floor(Math.random()*window.innerWidth)
    dziurapoX = Math.floor(Math.random()*window.innerWidth)
    dziurapoY = Math.floor(Math.random()*window.innerHeight)
    dziura.style.left = dziurapoX + 'px'
    dziura.style.top = dziurapoY + 'px'
    kula.style.left = poX + 'px'
    kula.style.top = poY + 'px'
}
function orintacjaUrzadzenia(e){
    prX=e.gamma/45
    prY=e.beta/45
    przesuwaniekuli()
}
function przesuwaniekuli(){ //poruszanie się kuli po planszy
    //poziomie
    if(poX+prX<window.innerWidth-50 && poY+prX>0){  
        poX+=prX
        kula.style.left=poX+'px'        
    }
    //pionie
    
    if(poY+prY<window.innerHeight-50 && poY+prY>0){
        poY+=prY
        kula.style.top=poY+'px'  
    }
    if(Math.abs((poY - dziurapoY)) < 5 && Math.abs((poX - dziurapoX)) <5){//sprawdzenie
      
        Wygrales()
        
    }
}