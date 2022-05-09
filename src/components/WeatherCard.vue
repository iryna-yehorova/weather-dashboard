<template>
    <div class="card m-2 text-center" v-if="item">
        <div class="card-title">
            <h5 class="card-title mt-2 text-warning">{{ item.title }}</h5>
        </div>
        <div class="card-body pt-0 pb-2">
            <p class="card-text fs-3">{{ item.text }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import SimpleCard from '@/types/SimpleCard'

export default defineComponent ({
    props: {
        item: Object as PropType<SimpleCard>
    }
})
</script>