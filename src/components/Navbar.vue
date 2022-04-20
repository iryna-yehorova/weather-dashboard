<template>
<nav class="navbar navbar-expand-lg navbar-light bg-warning bg-gradient">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Weather Forecast</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <input @change="customChange" class="me-2 d-inline-flex" type="search" placeholder="Search" aria-label="Search">
    </div>
  </div>
</nav>
</template>

<script>
export default {
    setup (_, { emit }) {
        const customChange = (event) => {
          emit("onSearchChange", event.target.value)
        }

        return { customChange }
    }
}
</script>