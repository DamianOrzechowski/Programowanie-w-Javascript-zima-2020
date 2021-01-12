import Card from './Card.js'
import Cards from './Cards.js'

document.querySelector('#addCityButton').addEventListener('click', addCity)
const cards = new Cards('#cardArea')
cards.loadCardsFromLocalStorage()

function addCity () {
    document.querySelector('#cityName').value
        ? cards.addCard(new Card(document.querySelector('#cityName').value))
        : alert('Musisz podać nazwę miasta')
}

