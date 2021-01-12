
const myKey = 'e323aa96ab8e4e0fa7d363a94e2561db'
/* eslint-disable no-return-assign */
// pro.openweathermap.org/data/2.5/forecast/hourly?q=berlin&appid=5dca6fbf67b9b338071b08fb15025213
class Card {
    constructor (cityName) {
        this.City = cityName
        this.id = '' + Date.now()
        this.Temperaturemax = 0
        this.Temperaturelow = 0
        this.rh = 0
        this.weather = 0
        this.Description = 'abc'
        this.Icon = 'abc.png'
    }

    async fetchData () {
        return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${this.City},&key=${myKey}&lang=pl`)
            .then(response => {
                return response.json()
            }).then(this.assignData.bind(this))
      
    }

    assignData (JsonData) {
        console.log(this.City, JsonData.data[0].max_temp)
        this.City = JsonData.city_name
        this.Temperaturemax = JsonData.data[0].max_temp + '°C'
        this.Temperaturelow = JsonData.data[0].low_temp + '°C'
        this.rh = JsonData.data[0].rh
        this.weather = JsonData.data[0].weather.description
        this.Description = JsonData.data[0].weather.description
        this.Icon = JsonData.data[0].weather.icon
    }
}

export default Card
