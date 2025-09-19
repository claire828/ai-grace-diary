<script setup lang="ts">
import { useDiary } from '@/composables/useDiary'
import { useObservable } from '@vueuse/rxjs'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import IconCalendar from './icons/IconCalendar.vue'
import IconChevronDown from './icons/IconChevronDown.vue'
import IconClock from './icons/IconClock.vue'
import IconViewDetail from './icons/IconViewDetail.vue'

const route = useRoute()
const diaryId = computed(() => route.params.id as string)
const { streams } = useDiary()

const diary = useObservable(streams.fetchDiary$(diaryId.value), {
  initialValue: undefined,
})
const createdDate = computed(() =>
  diary.value ? new Date(diary.value.created_at).toLocaleDateString() : '',
)
const createdTime = computed(() =>
  diary.value
    ? new Date(diary.value.created_at).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : '',
)
const isExpanded = ref(false)
</script>

<template>
  <div
    data-slot="card"
    class="bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm md:col-span-2 lg:col-span-3"
  >
    <!-- Card Header with Toggle Button -->
    <div
      data-slot="card-header"
      class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 py-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] cursor-pointer hover:bg-accent/5 transition-colors"
      @click="isExpanded = !isExpanded"
    >
      <div class="flex items-center justify-between w-full">
        <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
          <IconViewDetail class="w-5 h-5 text-primary" />
          Original Diary Entry
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm text-muted-foreground" v-if="diary">
            {{ createdDate }}
          </span>
          <IconChevronDown
            class="w-5 h-5 transition-transform duration-200"
            :class="{ 'rotate-180': isExpanded }"
          />
        </div>
      </div>
    </div>

    <!-- Collapsible Content -->
    <div
      class="overflow-hidden transition-all duration-300 ease-in-out"
      :class="isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
    >
      <div data-slot="card-content" class="px-6 pb-6" v-if="diary">
        <div class="space-y-4">
          <div class="flex items-center gap-4 text-sm text-muted-foreground">
            <div class="flex items-center gap-2">
              <IconCalendar class="w-4 h-4" />
              <span>{{ createdDate }}</span>
            </div>
            <div class="flex items-center gap-2">
              <IconClock class="w-4 h-4" />
              <span>{{ createdTime }}</span>
            </div>
          </div>
          <div class="bg-accent/5 p-4 rounded-lg border border-accent/20 max-h-64 overflow-auto">
            <p class="text-sm leading-relaxed whitespace-pre-wrap text-foreground/90">
              {{ diary.content }}
            </p>
          </div>
        </div>
      </div>
      <div v-else class="px-6 pb-6">
        <p class="text-sm text-muted-foreground">No diary content available.</p>
      </div>
    </div>
  </div>
</template>
