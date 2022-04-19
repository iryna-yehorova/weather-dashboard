const axios = require('axios').default;

async function getDataForecast(city) {
    try{
       const res = await axios.get(process.env.VUE_APP_URL, {
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

export { getDataForecast }