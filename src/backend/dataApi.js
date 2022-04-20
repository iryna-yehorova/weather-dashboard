const axios = require('axios').default;

axios.defaults.baseURL = process.env.VUE_APP_URL
const key = process.env.VUE_APP_KEY

async function getDataForecast(city) {
    try{
       const res = await axios.get('forecast.json', {
            params: {
                key: key,
                q: city,
                days: 3,
                aqi: 'no',
                alerts: 'no'
            }
        }     
      )
      return res.data.forecast
    } catch(err) {
        console.log(err)
    }
}

async function getCurrentWeather(city) {
    try{
        const res = await axios.get('current.json', {
            params: {
                key: key,
                q: city,
                aqi: 'no',
                }
         }     
       )
       return res.data.current
     } catch(err) {
         console.log(err)
     }
}

export { 
    getDataForecast, 
    getCurrentWeather 
}