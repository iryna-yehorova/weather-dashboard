<template>
  <div>
    <div class="container-fluid">
      <div class="row bg-warning">
        <Navbar @onSearchChange='getSearch'/> 
      </div>
      <div class="row" >
        <div class="col-3 pb-3">
          <CityList />
        </div>
        <div class="col ps-0">
          <Dashboard :forecast="forecast" :location="location" />
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import { toRefs, watch, reactive } from 'vue'
import Navbar from './components/Navbar.vue'
import CityList from './components/CityList.vue'
import Dashboard from './components/Dashboard.vue'
import { getDataForecast } from './backend/dataApi'

export default {
  name: 'App',
  components: {
    Navbar,
    CityList,
    Dashboard
  },
  setup() {
    const state = reactive({
        loading: true,
        forecast: [],
        location: {},
        search: '',
        geolocation: ''
    })

    const getSearch = (location) => state.search = location 

    watch ( 
      () => state.search, 
      async() => {
        const response = await getDataForecast(state.search);
        state.forecast = response.forecast.forecastday,
        state.location = {
          country: response.location.country,
          region: response.location.region,
          name: response.location.name
        },
        state.loading = false
    })

    if (!state.search) {
      navigator.geolocation.getCurrentPosition(
        position => {
          state.geolocation = `${position.coords.latitude},${position.coords.longitude}`
          getSearch(state.geolocation)
        },
        error => {
          console.log(error)
          getSearch('Kiev')
        }
      );
    }

    return { ...toRefs(state), getSearch}
  },
}
</script>

