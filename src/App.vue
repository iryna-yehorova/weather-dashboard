<template>
  <div>
    <Navbar @onSearchChange='getSearch'/> 
    <div class="container">
      <div class="row" >
        <div class="col-3 bg-warning bg-opacity-25 pb-3">
          <CityList />
        </div>
        <div class="col ps-0">
          <Dashboard :forecast="forecast" :city="search"/>
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
        search: ''
    })

    const getSearch = (location) => state.search = location 

    watch( 
      () => state.search, 
      async() => {
        const response = await getDataForecast(state.search);
        state.forecast = response.forecastday,
        state.loading = false
    })

    if (!state.search) {
      getSearch('Kiev')
    }

    return { ...toRefs(state), getSearch}
  },
}
</script>

