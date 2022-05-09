<template>
    <div>
        <City v-for="(item, index) in list"
            :key="index"
            :item="item"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import City from "./City.vue"
import CityListItem from '@/types/CityListItem'
import * as dataApi from '@/backend/dataApi'

export default defineComponent({
    components: {
        City
    },
    setup() {
        const state = reactive<{ list: CityListItem[] }>({
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
            state.list.forEach( async(item: CityListItem ) => {
                if(item.title) {
                    let current = await dataApi.getCurrentWeather(item.title)
                    item.temperature = current.temp_c;
                    item.humidity = current.humidity;
                    item.condition = current.condition
                }
            })
        }
            
        getInfo()
        
        return { ...toRefs(state), getInfo}
    }
})
</script>