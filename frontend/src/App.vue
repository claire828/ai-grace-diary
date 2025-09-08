<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="my-4">
    <nav>
      <RouterLink to="/">Home</RouterLink> | <RouterLink to="/report">Report</RouterLink> |
      <RouterLink to="/history">Recent Diaries</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
