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

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import City from "./City.vue"
import { useCurrentApi } from '../composables/useCurrentApi'
import WeatherCondition from '@/types/WeatherCondition'

interface CityList {
    title?: string,
    temperature: string,
    humidity: string,
    condition: WeatherCondition
}

export default defineComponent({
    components: {
        City
    },
    setup() {
        const state = reactive<{ list: CityList[] }>({
            list: [
                { title: 'Paris', temperature: '', humidity: '', condition: { icon: '', text: '', code: 0 } },
                { title: 'Kiev', temperature: '', humidity: '', condition: { icon: '', text: '', code: 0 } },
                { title: 'Berlin', temperature: '', humidity: '', condition: { icon: '', text: '', code: 0 } },
                { title: 'Stambul', temperature: '', humidity: '', condition: { icon: '', text: '', code: 0 } },
                { title: 'Tokio', temperature: '', humidity: '', condition: { icon: '', text: '', code: 0 } },
                { title: 'New York', temperature: '', humidity: '', condition: { icon: '', text: '', code: 0 } }
            ]
        })

        function getInfo() {
            state.list.forEach((item: CityList ) => {
                if(item.title) {
                    let current = useCurrentApi(item.title)
                    item.temperature = current.state.temperature;
                    item.humidity = current.state.humidity;
                    item.condition = current.state.condition
                }
            })
        }
            
        getInfo()
        
        return { ...toRefs(state), getInfo}
    }
})
</script>