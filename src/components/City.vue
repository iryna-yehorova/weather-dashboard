<template>
    <div class="card mt-3 border-warning">
        <div class="card-body" v-if="item">
            <div class="pb-3 d-flex align-items-center justify-content-between">
                <h5 class="fw-bold fs-3 text-warning">{{ item.title }}</h5>
                <img :src="icon" style="width: 64px" alt="weather condition">
            </div>
            <div class="pb-3 d-flex justify-content-between">
                <p class="card-text"> Temperature: {{ item.temperature }}&deg;C</p>
                <p class="card-text"> Humidity: {{ item.humidity }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, ref } from 'vue'
import CityListItem from '@/types/CityListItem'

export default defineComponent({
    props: {
        item: Object as PropType<CityListItem>
    },
    setup (props) {
        const icon = ref<string>('')

        watch(props, () => {
            if(props.item) {
                icon.value = 'https:' + props.item.condition.icon
            }
        })

        return { icon }
    }
})
</script>