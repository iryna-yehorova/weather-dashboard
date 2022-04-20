<template>
    <div>
        <City v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            :temperature="item.temperature"
            :humidity="item.humidity" 
            :condition="item.condition"
        />
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import City from "./City.vue"
import { useCurrentApi } from '../composables/useCurrentApi'

export default {
    components: {
        City
    },
    setup() {
        const state = reactive({
            list: [
                { title: 'Paris', temperature: '', humidity: '', condition: {} },
                { title: 'Kiev', temperature: '', humidity: '', condition: {} },
                { title: 'Berlin', temperature: '', humidity: '', condition: {} }
            ]
        })

        function getInfo() {
            state.list.forEach((item) => {
                let current = useCurrentApi(item.title)
                let { temperature, humidity, condition } = current;
                item.temperature = temperature;
                item.humidity = humidity;
                item.condition = condition
            })
        }
            
        getInfo()
        
        return { ...toRefs(state), getInfo}
    }
}
</script>