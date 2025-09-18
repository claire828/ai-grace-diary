<script setup lang="ts">
import ConfirmDialog from 'primevue/confirmdialog'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="my-4">
    <nav>
      <RouterLink to="/">Write Diary</RouterLink> |
      <RouterLink to="/history">Recent Diaries</RouterLink>
    </nav>
  </header>

  <!-- global ConfirmDialog for PrimeVue ConfirmationService -->
  <ConfirmDialog
    :pt="{
      root: { class: 'rounded-xl shadow-2xl max-w-md w-full mx-4' },
      header: {
        class: 'p-5 !justify-around text-center font-semibold text-lg',
      },
      content: { class: 'px-6 py-4 text-white text-center leading-relaxed' },
      footer: {
        class: 'p-6 !justify-center rounded-b-xl',
      },
      acceptButton: {
        class:
          'px-6 py-2.5  text-white rounded-lg hover:bg-red-600 transition-colors font-medium min-w-[100px] !flex !items-center ',
      },
      rejectButton: {
        class:
          'px-6 py-2.5 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium min-w-[100px] !flex !items-center ',
      },
    }"
  />

  <RouterView />
</template>
