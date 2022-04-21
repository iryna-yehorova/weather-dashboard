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
        state.temperature = response.temp_c;
        state.humidity = response.humidity;
        state.condition = response.condition;
        state.loading = false
    }

    getCurrent()

    return { ...toRefs(state)}
}