<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <div class="d-flex flex-row">
        <div class="navbar-brand fw-bold fs-2">Weather Forecast</div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <input @change="customChange" class="me-2 form-control" type="search" placeholder="Search city" aria-label="Search">
        </div>
      </div>
    </div>
  </nav> 
</template>

<script lang="ts"> 
import { defineComponent } from 'vue'
export default defineComponent ({
    setup (_, { emit }) {
      const customChange = (event: Event) => {
        emit("onSearchChange", (event.target as HTMLInputElement).value)
      }
      return { customChange }
    }
})
</script>