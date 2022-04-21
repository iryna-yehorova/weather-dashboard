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
                <div class="col">
                    <TomorrowCard title="Tomorrow" :weather="forecast[1]"/>
                </div>
                <div class="col">
                    <TomorrowCard :title="nextDay" :weather="forecast[2]"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, watch, toRefs } from 'vue'
import Overview from './Overview.vue'
import WeatherCards from './WeatherCards.vue'
import TemperatureChart from "./TemteratureChart.vue"
import TomorrowCard from './TomorrowCard.vue'
import moment from 'moment'
import daysOfWeek from '../helpers/dayOfWeek'

export default {
    components: {
        Overview,
        WeatherCards,
        TemperatureChart,
        TomorrowCard
    },
    props: ['forecast', 'location'],
    setup(props) {
        const state = reactive({
            nextDay: ''
        })

        watch(props, () => {
            const next =  moment(props.forecast[2].date).isoWeekday()
            state.nextDay = daysOfWeek[next]
        })

        return { ...toRefs(state)}
    }
}
</script>

