import { reactive, watchEffect } from "vue"
import { getDataForecast } from '../backend/dataApi'

export const useForecastApi = () => {
    const state = reactive({
        search: '',
        loading: true,
        forecast: []
    })

    watchEffect ( async() => {
        if(state.search.length <= 3) {
            return 
        }
        
        const response = await getDataForecast(state.search);
        state.forecast = response.forecastday;
        state.loading = false;
    })

    return state
}