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

        async function getInfo() {
            state.list.forEach(item => {
                    const res = getCurrentWeather(item.title);
                    item.temperature = res.current.temp_c;
                    item.humidity = res.current.humidity;
                    item.condition = res.current.condition
            })
        }
            
        getInfo()
        
        return { ...toRefs(state), getInfo}
    }
}
</script>