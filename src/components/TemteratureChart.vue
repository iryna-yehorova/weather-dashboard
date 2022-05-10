<template>
     <LineChart v-bind="lineChartProps" />
</template>

<script lang="ts">
import { defineComponent, computed, reactive, watch, PropType } from 'vue'
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import moment from 'moment';
import ForecastDay from '@/types/ForecastDay';
import Hour from "@/types/Hour";
Chart.register(...registerables);

export default defineComponent({
  components: { LineChart },
  props: {
      weather: Object as PropType<ForecastDay>
  },
  setup(props) {
    const state = reactive<{ tempData: number[]; labels: string[] }>({
      tempData: [],
      labels: []
    })

    watch(props, () => {
      if(props.weather) {
        props.weather.hour.forEach( (item: Hour) => state.tempData.push(item.temp_c));
        props.weather.hour.forEach(i => {
            let date = moment.unix(i.time_epoch).format("HH:mm")
            state.labels.push(date)
        }) 
      }  
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
