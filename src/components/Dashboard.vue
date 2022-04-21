<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                <Overview :today="forecast[0]" :location="location" />
            </div>                    
            <WeatherCards :weather="forecast[0]"/>
            <div class="row">
                <div class="col"> 
                    Table
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toRefs } from 'vue'
import Overview from './Overview.vue'
import WeatherCards from './WeatherCards.vue'

export default {
    components: {
        Overview,
        WeatherCards
    },
    props: ['forecast', 'location'],
    setup(props) {
        let [today, tomorrow, next] = toRefs(props.forecast)
        console.log(today, tomorrow, next)
    }
}
</script>

