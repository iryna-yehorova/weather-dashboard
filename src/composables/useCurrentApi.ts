import { reactive } from 'vue'
import { getCurrentWeather } from '../backend/dataApi'
import WeatherCondition from '@/types/WeatherCondition'

export const useCurrentApi = (city: string) => {
    const state = reactive<{ temperature: string, humidity: string, condition: WeatherCondition }>({
        temperature: '',
        humidity: '',
        condition: { icon: '', text: '', code: 0 }
    })

    async function getCurrent() {
        const response = await getCurrentWeather(city);
        state.temperature = response.temp_c;
        state.humidity = response.humidity;
        state.condition = response.condition;
    }

    getCurrent()

    return { state }
}