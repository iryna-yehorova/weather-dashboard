import WeatherCondition from './WeatherCondition'

interface CityList {
    title?: string,
    temperature: string,
    humidity: string,
    condition: WeatherCondition
}

export default CityList