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
        </div>
    </div>
</template>

<script>
import { toRefs } from 'vue'
import Overview from './Overview.vue'
import WeatherCards from './WeatherCards.vue'
import TemperatureChart from "./TemteratureChart.vue"

export default {
    components: {
        Overview,
        WeatherCards,
        TemperatureChart
    },
    props: ['forecast', 'location'],
    setup(props) {
        let [today, tomorrow, next] = toRefs(props.forecast)
        console.log(today, tomorrow, next)
    }
}
</script>

