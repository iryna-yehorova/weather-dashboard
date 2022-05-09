import Astro from './Astro'
import Day from './Day'
import Hour from './Hour'

interface ForecastDay {
    astro: Astro,
    date: string,
    date_epoch: number,
    day: Day,
    hour: Hour[]    
}

export default ForecastDay