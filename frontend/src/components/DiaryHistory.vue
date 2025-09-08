<script setup lang="ts">
import DiaryRow from './DiaryRow.vue'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <section id="diary-history" class="bg-white rounded-xl shadow-sm border p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-6">{{ props.title }}</h2>
    <div class="space-y-4">
      <DiaryRow
        date="January 16, 2025"
        text="A wonderful day filled with new experiences and learning..."
        moodStatus="Positive"
        diaryStatus="published"
      />

      <DiaryRow
        date="January 13, 2025"
        text="Challenging day at work but managed to overcome obstacles..."
        moodStatus="Neutral"
        diaryStatus="analyzed"
      />

      <DiaryRow
        date="January 12, 2025"
        text="Felt a bit down today, but hopeful for tomorrow..."
        moodStatus="Negative"
        diaryStatus="analyzed"
      />
    </div>
  </section>
</template>
