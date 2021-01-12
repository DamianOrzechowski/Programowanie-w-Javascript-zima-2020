class UI {
    constructor (container) {
        this.container = this.getCardContainer(container)
    }
  
    getCardContainer (container) {
        return document.querySelector(container)
    }
  
    createCard (card) {
        const htmlCard = document.createElement('div')
        htmlCard.classList.add('card')
        const htmlCity = document.createElement('h1')
        const htmlTemperaturemax = document.createElement('p')
        const htmlTemperaturelow = document.createElement('p')
        const htmlrh = document.createElement('p')
        const htmlWeather = document.createElement('p')
        const htmlDescription = document.createElement('p')
        const htmlIcon = document.createElement('img')
        //const htmlRemoveBtn = document.createElement('button')
        //const htmlDate = document.createElement('h4')
      
      
      
        htmlCity.innerHTML = card.City
        htmlWeather.innerHTML = card.weather
        htmlDescription.innerHTML = card.Description
        htmlIcon.src = `https://www.weatherbit.io/static/img/icons/${card.Icon}.png`
        htmlTemperaturemax.innerHTML = (`Maksymalna Temperatura ${card.Temperaturemax}`)
        htmlTemperaturelow.innerHTML = (`Minimalna Temperatura ${card.Temperaturelow}`)
        htmlrh.innerHTML = (`Wilgotność  ${card.rh}%`)
        //htmlRemoveBtn.innerHTML = 'Usuń'
      

  
        htmlCard.appendChild(htmlCity)
        htmlCard.appendChild(htmlIcon)
        htmlCard.appendChild(htmlWeather)
        htmlCard.appendChild(htmlTemperaturemax)
        htmlCard.appendChild(htmlTemperaturelow)
        htmlCard.appendChild(htmlrh)
        //htmlCard.appendChild(htmlRemoveBtn)

      
        return htmlCard
    }
  
    addCard (card) {
        const htmlCard = this.createCard(card)
        console.log('container', this.notesContainer)
        this.container.appendChild(htmlCard)
    }
}
  
export default UI