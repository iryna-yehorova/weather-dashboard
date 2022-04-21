import { reactive, watch, toRefs } from "vue"
import { getDataForecast } from '../backend/dataApi'



export const useForecastApi = () => {
    const state = reactive({
        loading: true,
        forecast: [],
        search: ''
    })

    watch( 
        () => state.search, 
        async() => {
        
            const response = await getDataForecast(state.search);
            state.forecast = response.forecastday,
            state.loading = false
    })

    return { ...toRefs(state) }
}