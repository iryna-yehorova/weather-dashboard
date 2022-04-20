<template>
  <div>
    <Navbar @onSearchChange='getSearch'/> 
    <CityList />
   
  </div>
</template>

<script>
import * as dataApi from "./backend/dataApi"
import { reactive, toRefs } from 'vue'
import Navbar from './components/Navbar.vue'
import CityList from './components/CityList.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    CityList
  },
  setup() {
    const state = reactive({
      location: '',
      current: {},
      forecast: {}
    })

    const getSearch = (location) => {
      state.location = location
      getData(location)
    }

    async function getData(location) {
      if(location.length <= 3) {
        return 
      }

      const res = await dataApi.getDataForecast(location)
      state.current = res.current
      state.forecast = res.forecast.forecastday
    }

    return { ...toRefs(state), getSearch}
  },
}
</script>

