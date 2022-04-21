<template>
    <div class="row">
        <v-col class="col-12 col-md-4" v-for="(item, index) in current" :key="index">
            <WeatherCard :item="item"/>
        </v-col>
    </div>
</template>

<script>
import { reactive, watch, toRefs } from 'vue'
import WeatherCard from './WeatherCard.vue'

export default {
    components: {
        WeatherCard
    },
    props: {
        weather: Object
    },
    setup(props) {
        const state = reactive({
            current: {
                uv: {},
                wind: {},
                humidity: {},
                rain: {},
                temperature: {},
                condition: {},
                sunrise: {},
                sunset: {},
                moon: {}
            }
        })

        watch(props, () => {
            state.current.uv = {
                title: 'UV Index',
                text: props.weather.day.uv
            }
            state.current.wind = {
                title: 'Wind Status',
                text: props.weather.day.avgvis_km
            }
            state.current.humidity = {
                title: 'Humidity',
                text: props.weather.day.avghumidity
            }
            state.current.rain = {
                title: 'Daily Chance of Rain',
                text: props.weather.day.daily_chance_of_rain
            }
            state.current.sunrise = {
                title: 'Sunrise',
                text: props.weather.astro.sunrise,
            }
            state.current.sunset = {
                title: 'Sunset',
                text: props.weather.astro.sunset
            }
            state.current.moon = {
                title: 'Moon Phase',
                text:  props.weather.astro.moon_phase
            }
            state.current.temperature = {
                title: 'Average Temperature',
                text: props.weather.day.avgtemp_c
            }
            state.current.condition = {
                title: 'Condition',
                text: props.weather.day.condition.text
            }
        })

        return { ...toRefs(state)}
    }

}
</script>