<template>
    <div class="card w-50">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text"> Temperature: {{temperature}}</p>
            <a href="#" class="btn btn-primary">Check</a>
        </div>
    </div>
</template>

<script>
import {toRefs} from 'vue'
export default ({
    setup(props) {
        return {...toRefs(props)}
    }
})
</script>
