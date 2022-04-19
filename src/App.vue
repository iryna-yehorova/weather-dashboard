<template>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
export default {
  name: 'App',
  components: {},
  setup() {
    const axios = require('axios').default;

    axios.get(process.env.VUE_APP_URL,   {
      params: {
        key: process.env.VUE_APP_KEY,
        q: 'Kiev',
        days: 3,
        aqi: 'no',
        alerts: 'no'
      }
    }     
    )
    .then((data) => console.log(data.data))
  },
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
