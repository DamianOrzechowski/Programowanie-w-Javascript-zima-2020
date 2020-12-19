
const myKey = 'e323aa96ab8e4e0fa7d363a94e2561db'
/* eslint-disable no-return-assign */
// pro.openweathermap.org/data/2.5/forecast/hourly?q=berlin&appid=5dca6fbf67b9b338071b08fb15025213
class Card {
  constructor (cityName) {
    this.City = cityName
    this.id = '' + Date.now()
    this.Temperature = 0
  }

  async fetchData () {
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${this.City},&key=${myKey}&lang=pl`)
      .then(response => {
        return response.json()
      }).then(this.assignData.bind(this))
  }

  assignData (JsonData) {
    console.log(this.City, JsonData.data[0].max_temp)
    this.Temperature = JsonData.data[0].max_temp
  }
}

export default Card
