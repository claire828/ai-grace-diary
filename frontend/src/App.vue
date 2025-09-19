<script setup lang="ts">
import DialogWrapper from '@/components/DialogWrapper.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="my-4">
    <nav>
      <RouterLink to="/">Write Diary</RouterLink> |
      <RouterLink to="/history">Recent Diaries</RouterLink>
    </nav>
  </header>

  <RouterView />

  <!-- Global dialog wrapper -->
  <DialogWrapper />
</template>
