document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recordBtn').addEventListener('click', onRecordBtnClick);
document.querySelector('#playBtn').addEventListener('click', onPlayBtnClick);
document.querySelector('#clearBtn').addEventListener('click', onClearBtnClick);

document.querySelector('#chanel1').addEventListener('click',onRecordChanel1BtnClick);
document.querySelector('#chanel2').addEventListener('click',onRecordChanel2BtnClick);
document.querySelector('#chanel3').addEventListener('click',onRecordChanel3BtnClick);
document.querySelector('#chanel4').addEventListener('click',onRecordChanel4BtnClick);
document.querySelector('#playallBtn').addEventListener('click',onPlayAllBtn);


let recordStartTime;
let selectedChanel = 1;//wybrany kanał
//funkcja przełączania kanałów
function onRecordChanel1BtnClick() {
    selectedChanel = 1;
}
function onRecordChanel2BtnClick() {
    selectedChanel = 2;
}
function onRecordChanel3BtnClick() {
    selectedChanel = 3;
}
function onRecordChanel4BtnClick() {
    selectedChanel = 4;
}


//tablice z magranymi dzwiękami 
const recordedSounds1 = [];
const recordedSounds2 = [];
const recordedSounds3 = [];
const recordedSounds4 = [];



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
    if (soundName) {
        const soundTime = Date.now() - recordStartTime;
        const soundObj = {
            id: soundName, 
            time: soundTime
        };
        switch(selectedChanel) {
            case 1:
                recordedSounds1.push(soundObj)
                playSound(soundName)
                console.log('pushed to 1')
                break;
            case 2:
                recordedSounds2.push(soundObj)
                playSound(soundName)
                console.log('pushed to 2')
                break;
            case 3:
                recordedSounds3.push(soundObj)
                playSound(soundName)
                console.log('pushed to 3')
                break;
            case 4:
                recordedSounds4.push(soundObj)
                playSound(soundName)
                console.log('pushed to 4')
                break;
        }
        
    }
}
function onRecordBtnClick() {
    recordStartTime = Date.now();
}
function onPlayBtnClick() {
    let recordedSounds = []
    recordedSounds.length = 0
    switch(selectedChanel){
        case 1:
            recordedSounds = recordedSounds1
            break
        case 2:
            recordedSounds = recordedSounds2
            break
        case 3:
            recordedSounds = recordedSounds3
            break
        case 4:
            recordedSounds = recordedSounds4
            break
    }
    for (let index = 0; index < recordedSounds.length; index++) {
        const soundObj = recordedSounds[index];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        );

    }
}
function playSound(id) {
    const sound = document.querySelector('#' + id);
    sound.currentTime = 0;
    sound.play();
}
function onClearBtnClick(){
    switch(selectedChanel){
        case 1:
            recordedSounds1.length = 0
            break
        case 2:
            recordedSounds2.length = 0;
            break
        case 3:
            recordedSounds3.length = 0;
            break
        case 4:
            recordedSounds4.length = 0;
            break
    }
    
}
function onPlayAllBtn(){
    for (let index = 0; index < recordedSounds1.length; index++) {
        const soundObj = recordedSounds1[index];
        setTimeout(
            () => {
                playSound(soundObj.id);

            },
            soundObj.time
        )
        
    }
    for (let index = 0; index < recordedSounds2.length; index++) {
        const soundObj = recordedSounds2[index];
        setTimeout(
            () => {
                playSound(soundObj.id);

            },
            soundObj.time
        )
        
    }
    for (let index = 0; index < recordedSounds4.length; index++) {
        const soundObj = recordedSounds4[index];
        setTimeout(
            () => {
                playSound(soundObj.id);

            },
            soundObj.time
        )
        
    }
    for (let index = 0; index < recordedSounds3.length; index++) {
        const soundObj = recordedSounds3[index];
        setTimeout(
            () => {
                playSound(soundObj.id);

            },
            soundObj.time
        )
        
    }
}