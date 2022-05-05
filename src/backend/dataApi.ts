const axios = require('axios').default;

const http = axios.create({
    baseURL: process.env.VUE_APP_URL,
    params: {
        key: process.env.VUE_APP_KEY,
        aqi: 'no'
    }
});

async function getDataForecast(city : String) {
    try{
       const res = await http.get('forecast.json', {
            params: {
                q: city,
                days: 3,
                alerts: 'no'
            }
        }     
      )
      return res.data
    } catch(err) {
        console.log(err)
    }
}

async function getCurrentWeather(city : String) {
    try{
        const res = await http.get('current.json', {
            params: {
                q: city,
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