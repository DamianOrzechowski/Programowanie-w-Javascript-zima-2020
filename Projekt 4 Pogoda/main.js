const myKey = '6e0b2bd7dda1f02a5eb95ce5a13cf5c3'
const Citys = 'Berlin' 
const promiseweather = fetch(`pro.openweathermap.org/data/2.5/forecast/hourly?q=${Citys}&appid=${myKey}`)
promiseweather.then(response => console.log(response.data),
reason => console.log(reason)
)