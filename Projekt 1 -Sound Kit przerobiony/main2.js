import Percussion from './percussion.js'
import Chanel from "./chanel.js"
document.querySelector("#test").addEventListener('click',Playsoud1)

const Beben = new Percussion("clap");
const testchanel = new Chanel()

testchanel.AddSound(Beben)


    
function Playsoud1(){
    testchanel.Playsounds();
}