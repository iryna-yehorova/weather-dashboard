import { reactive, toRefs } from 'vue'
import { getCurrentWeather } from '../backend/dataApi'

export const useCurrentApi = (city) => {
    let state = reactive({
        loading: true,
        temperature: '',
        humidity: '',
        condition: {}
    })

    async function getCurrent() {
        const response = await getCurrentWeather(city);
        state = {
            ...state,
            temperature: response.temp_c,
            humidity: response.humidity,
            condition: response.condition,
            loading: false
        }
    }

    getCurrent()

    return {...toRefs(state)}
}