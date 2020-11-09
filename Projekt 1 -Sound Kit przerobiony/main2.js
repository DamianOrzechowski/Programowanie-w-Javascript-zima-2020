import Percussion from './percussion.js'
import Chanel from "./chanel.js"

document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recordBtn').addEventListener('click', onRecordBtnClick);
document.querySelector('#playBtn').addEventListener('click', onPlayBtnClick);
const chanel1 = new Chanel()

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
        chanel1.AddSound(new Percussion(soundName))
        chanel1.playNewest()
    }
}
function onRecordBtnClick(){
chanel1.StartRec()
}


function onPlayBtnClick(){
chanel1.Playsounds()
}
    
