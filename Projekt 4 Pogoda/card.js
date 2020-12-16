
const myKey = '6e0b2bd7dda1f02a5eb95ce5a13cf5c3'
class wehatercard {
    constructor(cityName) {
        this.City = cityName ,
        this.Temperature = '12'
        
    }  
    fetchData() {
    Promise((resolve ,reject) => {
    fetch(`pro.openweathermap.org/data/2.5/forecast/hourly?q=${this.City}&appid=${myKey}`)
    .then(response => response.json()
      .then(
        this.Temperature = response.list[0].main.temp
      ))
  resolve('sucess')
    })
            
    }

}
export default Card
