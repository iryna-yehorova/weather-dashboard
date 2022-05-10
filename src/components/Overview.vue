<template>
    <div class="row">
        <div class="col" v-if="location">
            <h1 class="fw-bold">{{ location.name }}</h1>
            <p>{{ location.region }}, {{ location.country }} </p>
        </div>
        <div class="col d-flex flex-column align-items-end">
            <p>Today is {{ day }}</p>
            <img :src="imageCondition" style="width: 64px" alt="weather condition">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, reactive, toRefs } from 'vue'
import moment from 'moment'
import Location from '@/types/Location'
import ForecastDay  from '@/types/ForecastDay'

export default defineComponent({
    props: {
        today: Object as PropType<ForecastDay>,
        location: Object as PropType<Location>
    },
   setup(props) {
        const state = reactive<{ day: string, imageCondition: string }>({
           day: '',
           imageCondition: ''
        })

        watch (props, () => {
            if(props.today) {
                state.day = moment.unix(props.today.date_epoch).format("MM/DD/YYYY");
                state.imageCondition = 'https:' + props.today.day.condition.icon
            }
        })

        return {
            ...toRefs(state)
        }
   }
})
</script>
