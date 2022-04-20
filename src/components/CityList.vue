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
import City from "./City.vue"
import { reactive, toRefs } from 'vue'
import { getCurrentWeather } from '../backend/dataApi'

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
            state.list.forEach(async (item) => {
                const res = await getCurrentWeather(item.title);
                item.temperature = res.temp_c;
                item.humidity = res.humidity;
                item.condition = res.condition
            })
        }
            
        getInfo()
        
        return { ...toRefs(state), getInfo}
    }
}
</script>