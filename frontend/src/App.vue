<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="my-4">
    <nav>
      <RouterLink to="/">Write Diary</RouterLink> |
      <RouterLink to="/history">Recent Diaries</RouterLink> |
      <RouterLink to="/report">Report</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
