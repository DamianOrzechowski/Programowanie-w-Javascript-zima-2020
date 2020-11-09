import Percussion from './percussion.js'
import Chanel from "./chanel.js"

document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recordBtn').addEventListener('click', onRecordBtnClick);
document.querySelector('#playBtn').addEventListener('click', onPlayBtnClick);
document.querySelector('#playallBtn').addEventListener('click',onPlayAllBtn);

const chanelSelectors = document.querySelectorAll('.chanelSelector')

const chanel1 = new Chanel()
const chanel2 = new Chanel()
const chanel3 = new Chanel()
const chanel4 = new Chanel()

let currentchanel;

chanelSelectors.forEach(button => {
    button.addEventListener('click',selectedChanel)
    
})

function selectedChanel (ev) {
    switch (ev.target.id) {
      case 'chanel1':
        currentchanel = chanel1
        break
      case 'chanel2':
        currentchanel = chanel2
        break
      case 'chanel3':
        currentchanel = chanel3
        break
      case 'chanel4':
        currentchanel = chanel4
        break
    }
  }

function onKeyPress(ev) {
    let soundName;
    switch (ev.code) {
    case 'KeyA':
        soundName = 'boom';
        break;
    case 'KeyS':
        soundName = 'clap';
        break;
    case 'KeyD':
        soundName = 'hihat';
        break;
    case 'KeyF':
        soundName = 'kick';
        break;
    case 'KeyG' :
        soundName = 'openhat';
        break;
    case 'KeyH' :
        soundName = 'ride';
        break;
    case 'KeyJ' :
        soundName = 'snare';
        break;
    case 'KeyK' :
        soundName = 'tink';
        break;
    case 'KeyL' :
        soundName = 'tom';
    }
    if(soundName){
        currentchanel.AddSound(new Percussion(soundName))
        currentchanel.playNewest()
    }
}
function onPlayAllBtn(){
chanel1.Playsounds();
chanel2.Playsounds();
chanel3.Playsounds();
chanel4.Playsounds();
}
function onRecordBtnClick(){
currentchanel.StartRec()
}


function onPlayBtnClick(){
    console.log(currentchanel)
currentchanel.Playsounds()

}