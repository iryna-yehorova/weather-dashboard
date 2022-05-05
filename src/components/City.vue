<template>
    <div class="card mt-3 border-warning">
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
import { defineComponent, PropType, watch, ref } from 'vue'
import WeatherCondition from '../types/WeatherCondition'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        temperature: {
            type: [Number, String],
            required: true
        },
        humidity: {
            type: [Number, String],
            required: true
        },
        condition: {
            type: Object as PropType<WeatherCondition>,
            required: true
        }
    },
    setup (props) {
        const icon = ref<string>('')

        watch(props, () => {
            icon.value = 'https:' + props.condition.icon
        })

        return { icon }
    }
})
</script>