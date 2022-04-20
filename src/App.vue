<template>
  <div>
    <Navbar @onSearchChange='getSearch'/> 
    <div class="row">
      <div class="col-5">
        <CityList />
      </div>
      <div class="col">
        <Dashboard />
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

    return { ...toRefs(state), getSearch}
  },
}
</script>

