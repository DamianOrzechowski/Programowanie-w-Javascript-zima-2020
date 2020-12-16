/*const myKey = '6e0b2bd7dda1f02a5eb95ce5a13cf5c3'
const Citys = 'Berlin' 
const promiseweather = fetch(`pro.openweathermap.org/data/2.5/forecast/hourly?q=${Citys}&appid=${myKey}`)
promiseweather.then(response => console.log(response.data),
reason => console.log(reason)
)*/
import UI from './UI.js'
import Card from './Card.js'

document.querySelector('#addCityButton').addEventListener('click', addCity)
const cityUI = new UI('#cardArea')

function addCity () {
  document.querySelector('#cityName').value
    ? cityUI.addCard(new Card(document.querySelector('#cityName').value))
    : alert('Musisz podać nazwę miasta')
}