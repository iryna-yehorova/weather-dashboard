<template>
    <div class="card w-50">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text"> Temperature: {{ temperature }}</p>
            <p class="card-text"> Humidity: {{ humidity }}</p>
            <p class="card-text"> Condition: {{ condition.text }}</p>
            <a href="#" class="btn btn-primary">Check</a>
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