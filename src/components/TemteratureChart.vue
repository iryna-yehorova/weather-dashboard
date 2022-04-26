<template>
     <LineChart v-bind="lineChartProps" />
</template>

<script>
import { computed, reactive, watch } from 'vue'
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import moment from 'moment'
Chart.register(...registerables);

export default {
  components: { LineChart },
  props: {
      weather: Object
  },
  setup(props) {
    const state = reactive({
        tempData: [],
        labels: []
    })

    watch(props, () => {
        props.weather.hour.forEach(item => state.tempData.push(item.temp_c));
        props.weather.hour.forEach(i => {
            let date = moment.unix(i.time_epoch).format("HH:mm")
            state.labels.push(date)
        })    
    })

    const getData = computed(() => ({
      labels: state.labels,
      datasets: [
        {
            data: state.tempData,
            borderColor: "#fd7e14",
            tension: 0.5,
        },
      ],
    }));

    const options = computed(() => ({
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    }));

    const { lineChartProps } = useLineChart({
      options,
      chartData: getData,
    });

    return {
      getData,
      options,
      lineChartProps,
      state
    };
  },
};
</script>
