<template>
    <div class="card mt-3">
        <div class="card-body">
            <div class="row pb-3">
                <div class="col">
                   <h5 class="card-title text-center fw-bold fs-3 text-warning">{{ title }}</h5>
                </div>
                 <div class="col">
                    <p class="card-text"> Condition: {{ condition.text }}</p>
                </div>
            </div>
            <div class="row pb-3">
                <div class="col">
                    <p class="card-text"> Temperature: {{ temperature }}</p>
                </div>
                 <div class="col">
                    <p class="card-text"> Humidity: {{ humidity }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        temperature: [Number, String],
        humidity: [Number, String],
        condition: Object
    }
}
</script>