<template>
     <LineChart v-bind="lineChartProps" />
</template>

<script lang="ts">
import { defineComponent, computed, reactive, watch, PropType } from 'vue'
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import moment from 'moment';
import Hour from '@/types/Hour';
Chart.register(...registerables);

export default defineComponent({
  components: { LineChart },
  props: {
      weather: PropType<Hour[]>
  },
  setup(props) {
    const state = reactive({
        tempData: [],
        labels: []
    })

    watch(props.weather, () => {
        props.weather.hour.forEach( (item: object) => state.tempData.push(item.temp_c));
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
});
</script>
