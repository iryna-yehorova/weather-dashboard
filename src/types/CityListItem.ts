import WeatherCondition from './WeatherCondition'

interface CityListItem{
    title: string,
    temperature: string,
    humidity: string,
    condition: WeatherCondition
}

export default CityListItem