<template>
    <div class="card">
        <div class="card-body" v-if="forecast">
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
import { defineComponent, PropType, reactive, watch, toRefs } from 'vue'
import Overview from './Overview.vue'
import WeatherCards from './WeatherCards.vue'
import TemperatureChart from "./TemteratureChart.vue"
import TomorrowCard from './TomorrowCard.vue'
import moment from 'moment'
import ForecastDay  from '@/types/ForecastDay'
import Location from '@/types/Location'
import NextDay from '@/types/NextDay'

export default defineComponent({
    components: {
        Overview,
        WeatherCards,
        TemperatureChart,
        TomorrowCard
    },
    props: {
        forecast: Array as PropType<ForecastDay[]>,
        location: Object as PropType<Location>
    },
    setup(props) {
        const state = reactive<{ nextForecast: NextDay[]}>({
            nextForecast: []
        })

        watch(props, async () => {
            if(props.forecast) {
                const next =  moment(props.forecast[2].date).isoWeekday()

                state.nextForecast.push({
                    title: getDayTitle(next - 1),
                    weather: props.forecast[1].day
                })
                state.nextForecast.push({
                    title: getDayTitle(next),
                    weather: props.forecast[2].day
                })
            }
        })

        function getDayTitle(val: number) {
            switch(val) {
                case 1: return 'Monday';
                case 2: return 'Tuesday';
                case 3: return 'Wednesday';
                case 4: return 'Thursday';
                case 5: return 'Friday';
                case 6: return 'Saturday';
                default: return 'Sunday';
            } 
        }

        return { ...toRefs(state)}
    }
})
</script>

