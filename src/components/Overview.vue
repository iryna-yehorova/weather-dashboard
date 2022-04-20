<template>
    <div class="row">
        <div class="col">
            <h1>{{ city }}</h1>
        </div>
        <div class="col">
            <p>Today is </p>
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        today: Object,
        city: String
    },
    // setup(props) {
    //     console.log(props.today.day.condition.icon.slice(2))
    // }
}
</script>
