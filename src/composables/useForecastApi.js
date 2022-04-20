import { reactive, watchEffect } from "vue"
import { getDataForecast } from '../backend/dataApi'

const SEARCH_LENGTH_LIMIT = 3

export const useForecastApi = () => {
    let state = reactive({
        search: '',
        loading: true,
        forecast: []
    })

    watchEffect ( async() => {
        if (state.search.length <= SEARCH_LENGTH_LIMIT) {
            return 
        }
        
        const response = await getDataForecast(state.search);
        state = {
            ...state,
            forecast: response.forecastday,
            loading: false
        }
    })

    return state
}