<template>
    <div class="card m-2 text-center">
        <div class="card-title">
            <h5 class="card-title mt-2 text-warning">{{ item.title }}</h5>
        </div>
        <div class="card-body pt-0 pb-2">
            <p class="card-text fs-3">{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>