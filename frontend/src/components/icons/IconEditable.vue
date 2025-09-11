<template>
  <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
    <circle cx="16" cy="16" r="16" fill="#34D399" class="animate-pulse" />
    <!-- Pencil body -->
    <rect
      x="20"
      y="10"
      width="2.5"
      height="12"
      rx="1.1"
      transform="rotate(45 20 10)"
      fill="#065F46"
    />
    <!-- Pencil tip -->
    <rect
      x="23.2"
      y="13.2"
      width="2.2"
      height="4.2"
      rx="1"
      transform="rotate(45 23.2 13.2)"
      fill="#FBBF24"
    />
    <!-- Pencil eraser -->
    <rect
      x="15.5"
      y="4.5"
      width="3.5"
      height="3.5"
      rx="1.2"
      transform="rotate(45 15.5 4.5)"
      fill="#F3F4F6"
    />
  </svg>
</template>

<script setup lang="ts">
// Pure icon, no props or logic
</script>
