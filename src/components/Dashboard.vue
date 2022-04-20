<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                <Overview :today="forecast[0]"/>

            </div>
            <div class="row">
                <div class="col">
                    Short overview
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Cards
                </div>
            </div>
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

export default {
    components: {
        Overview
    },
    props: ['forecast'],
    setup(props) {
        let [today, tomorrow, next] = toRefs(props.forecast)
         console.log(today, tomorrow, next)
    }
}
</script>

