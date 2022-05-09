<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                <Overview :today="forecast[0]" :location="location" />
            </div>                    
            <WeatherCards :weather="forecast[0]"/>
            <div class="row my-4">
                <div class="col"> 
                    <TemperatureChart :weather="forecast[0]"/>
                </div>
            </div>
            <div class="row">
                <div class="col" v-for="(item, index) in nextForecast" :key="index">
                    <TomorrowCard :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs } from 'vue'
import Overview from './Overview.vue'
import WeatherCards from './WeatherCards.vue'
import TemperatureChart from "./TemteratureChart.vue"
import TomorrowCard from './TomorrowCard.vue'
import moment from 'moment'
import daysOfWeek from '../helpers/dayOfWeek'
import ForecastDay  from '@/types/ForecastDay'
import Location from '@/types/Location'

interface DashboardProps {
    forecast: ForecastDay[],
    location : Location
}

export default defineComponent({
    components: {
        Overview,
        WeatherCards,
        TemperatureChart,
        TomorrowCard
    },
    props: ['forecast', 'location'],
    setup(props: DashboardProps) {
        const state = reactive({
            nextForecast: []
        })

        watch(props, async () => {
            const [, second, third] = props.forecast;
            const next =  moment(third.date).isoWeekday()
            state.nextForecast.push({
                title: daysOfWeek[next - 1],
                weather: second.day

            })
            state.nextForecast.push({
                title: daysOfWeek[next],
                weather: third.day
            })
        })

        return { ...toRefs(state)}
    }
})
</script>

