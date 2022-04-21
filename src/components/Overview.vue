<template>
    <div class="row">
        <div class="col">
            <h1>{{ location.name }}</h1>
            <p>{{ location.region }}, {{ location.country }} </p>
        </div>
        <div class="col d-flex flex-column align-items-end">
            <p>Today is {{ day }}</p>
            <img :src="imageCondition" style="width: 64px" alt="weather condition">
        </div>
    </div>
</template>

<script>
import { watch, reactive, toRefs } from 'vue'
import moment from 'moment'

export default {
    props: {
        today: Object,
        location: Object
    },
   setup(props) {
        const state = reactive({
           day: '',
           imageCondition: ''
        })

        watch (props, () => {
            state.day = moment.unix(props.today.date_epoch).format("MM/DD/YYYY");
            state.imageCondition = 'https:' + props.today.day.condition.icon
        })

        return {
            ...toRefs(state)
        }
   }
}
</script>
