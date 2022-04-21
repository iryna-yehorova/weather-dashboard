<template>
<div class="card">
    <div class="card-body">
         <div class="pb-3 d-flex align-items-center justify-content-between">
           <h5 class="fw-bold fs-3 text-warning">{{ title }}</h5>
        </div>
        <div class="row pb-3">
            <div class="col">
                <p class="card-text"> Temperature: {{ weather.day.avgtemp_c }}</p>
            </div>
            <div class="col">
                <p class="card-text"> Humidity: {{ weather.day.avghumidity }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        title: String,
        weather: Object
    },
}
</script>