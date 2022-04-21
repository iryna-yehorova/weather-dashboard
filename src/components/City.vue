<template>
    <div class="card mt-3 border-warning">
        <div class="card-body">
            <div class="pb-3 d-flex align-items-center justify-content-between">
                <h5 class="fw-bold fs-3 text-warning">{{ title }}</h5>
                <img :src="icon" style="width: 64px" alt="weather condition">
            </div>
            <div class="row pb-3">
                <div class="col">
                    <p class="card-text"> Temperature: {{ temperature }}</p>
                </div>
                 <div class="col">
                    <p class="card-text"> Humidity: {{ humidity }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { watch, ref } from 'vue'

export default {
    props: {
        title: String,
        temperature: [Number, String],
        humidity: [Number, String],
        condition: Object
    },
    setup(props) {
        const icon = ref('')

        watch(props, () => {
            icon.value = 'https:' + props.condition.icon
        })

        return { icon }
    }
}
</script>