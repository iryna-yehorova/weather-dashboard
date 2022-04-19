const axios = require('axios').default;
axios.defaults.baseURL = process.env.VUE_APP_URL

async function getDataForecast(city) {
    try{
       const res = await axios.get('forecast.json', {
            params: {
            key: process.env.VUE_APP_KEY,
            q: city,
            days: 3,
            aqi: 'no',
            alerts: 'no'
            }
        }     
      )
      return res.data
    } catch(err) {
        console.log(err)
    }
}

async function getCurrentWeather(city) {
    try{
        const res = await axios.get('current.json', {
             params: {
             key: process.env.VUE_APP_KEY,
             q: city,
             aqi: 'no',
             }
         }     
       )
       return res.data
     } catch(err) {
         console.log(err)
     }
}

export { 
    getDataForecast, 
    getCurrentWeather 
}