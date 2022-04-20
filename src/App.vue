<template>
  <div>
    <Navbar @onSearchChange='getSearch'/> 
    <div class="container">
      <div class="row" >
        <div class="col-3 bg-warning bg-opacity-25 pb-3">
          <CityList />
        </div>
        <div class="col ps-0">
          <Dashboard :forecast="forecast"/>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import { toRefs } from 'vue'
import Navbar from './components/Navbar.vue'
import CityList from './components/CityList.vue'
import Dashboard from './components/Dashboard.vue'
import { useForecastApi } from './composables/useForecastApi'

export default {
  name: 'App',
  components: {
    Navbar,
    CityList,
    Dashboard
  },
  setup() {
    const state = useForecastApi()

    const getSearch = (location) => state.search = location

    getSearch('Kiev')

    return { ...toRefs(state), getSearch}
  },
}
</script>

