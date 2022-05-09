<template>
    <div class="card mt-3">
        <div class="card-body">
            <div class="pb-3 d-flex align-items-center justify-content-between">
                <h5 class="fw-bold fs-3 text-warning">{{ title }}</h5>
                <img :src="icon" style="width: 64px" alt="weather condition">
            </div>
            <div class="pb-3 d-flex justify-content-between">
                <p class="card-text"> Temperature: {{ temperature }}&deg;C</p>
                <p class="card-text"> Humidity: {{ humidity }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, watchEffect, toRefs } from 'vue'

export default {
    props: {
        item: Object
    },
    setup(props) {
        const state = reactive({
            title: '',
            temperature: '',
            humidity: '',
            icon: ''
        })

        watchEffect(() => {
            state.title = props.item.title
            state.temperature = props.item.weather.avgtemp_c
            state.humidity = props.item.weather.avghumidity
            state.icon = 'https:' + props.item.weather.condition.icon
        })


        return { ...toRefs(state) }
    }
}
</script>