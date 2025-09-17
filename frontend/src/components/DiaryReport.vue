<script setup lang="ts">
import AnalysisBoard from '@/components/AnalysisBoard.vue'
import GratitudeBoard from '@/components/GratitudeBoard.vue'
import KeySummary from '@/components/KeySummary.vue'
import IconTrendingUp from './icons/IconTrendingUp.vue'
</script>

<template>
  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold text-foreground mb-2">Your Diary Analysis</h1>
    <p class="text-muted-foreground text-lg">
      Understanding your emotional journey with gentle insights
    </p>
  </header>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <div class="lg:col-span-2 space-y-6">
      <AnalysisBoard />
      <GratitudeBoard />
    </div>
    <div class="lg:col-span-2 space-y-6">
      <TTSControl />
      <DiaryTranslation />
      <KeySummary />
    </div>
  </div>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-2">
    <div
      data-slot="card"
      class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-2 lg:col-span-1"
    >
      <div
        data-slot="card-header"
        class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
      >
        <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
          <IconTrendingUp /> Stress Level
        </div>
      </div>
      <div data-slot="card-content" class="px-6 space-y-4">
        <div class="flex items-center gap-3">
          <div
            class="px-4 py-2 rounded-full border-2 font-medium bg-yellow-100 text-yellow-700 border-yellow-200"
          >
            Moderate
          </div>
          <div class="flex gap-1">
            <div class="w-3 h-3 rounded-full bg-primary"></div>
            <div class="w-3 h-3 rounded-full bg-primary"></div>
            <div class="w-3 h-3 rounded-full bg-primary"></div>
            <div class="w-3 h-3 rounded-full bg-muted"></div>
            <div class="w-3 h-3 rounded-full bg-muted"></div>
          </div>
        </div>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Moderate stress detected. You're managing well but could benefit from some relaxation
          techniques.
        </p>
      </div>
    </div>
    <div
      data-slot="card"
      class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-2 lg:col-span-1"
    >
      <div
        data-slot="card-header"
        class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
      >
        <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-heart w-5 h-5 text-primary"
          >
            <path
              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            ></path></svg
          >Emotional State
        </div>
      </div>
      <div data-slot="card-content" class="px-6">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span
              data-slot="badge"
              class="inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 px-3 py-1 bg-emerald-50 text-emerald-700 border-emerald-200"
              >Positive</span
            >
            <div class="flex items-center gap-2 text-sm text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-sparkles w-4 h-4"
              >
                <path
                  d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                ></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path></svg
              ><span class="capitalize">medium intensity</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              data-slot="badge"
              class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-card"
              >Happy</span
            ><span
              data-slot="badge"
              class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-card"
              >Reflective</span
            ><span
              data-slot="badge"
              class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-card"
              >Grateful</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      data-slot="card"
      class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-1 lg:col-span-1"
    >
      <div
        data-slot="card-header"
        class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
      >
        <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sparkles w-5 h-5 text-primary"
          >
            <path
              d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
            ></path>
            <path d="M20 3v4"></path>
            <path d="M22 5h-4"></path>
            <path d="M4 17v2"></path>
            <path d="M5 18H3"></path></svg
          >Emotional Balance
        </div>
      </div>
      <div data-slot="card-content" class="px-6 space-y-4">
        <div class="space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-emerald-600 font-medium">Positive</span
            ><span class="text-emerald-600 font-medium">75%</span>
          </div>
          <div
            aria-valuemax="100"
            aria-valuemin="0"
            role="progressbar"
            data-state="indeterminate"
            data-max="100"
            data-slot="progress"
            class="relative w-full overflow-hidden rounded-full h-3 bg-muted"
          >
            <div
              data-state="indeterminate"
              data-max="100"
              data-slot="progress-indicator"
              class="bg-primary h-full w-full flex-1 transition-all"
              style="transform: translateX(-25%)"
            ></div>
          </div>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-rose-600 font-medium">Negative</span
            ><span class="text-rose-600 font-medium">25%</span>
          </div>
          <div
            aria-valuemax="100"
            aria-valuemin="0"
            role="progressbar"
            data-state="indeterminate"
            data-max="100"
            data-slot="progress"
            class="relative w-full overflow-hidden rounded-full h-3 bg-muted"
          >
            <div
              data-state="indeterminate"
              data-max="100"
              data-slot="progress-indicator"
              class="bg-primary h-full w-full flex-1 transition-all"
              style="transform: translateX(-75%)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      data-slot="card"
      class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-2 lg:col-span-2"
    >
      <div
        data-slot="card-header"
        class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
      >
        <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-heart w-5 h-5 text-primary"
          >
            <path
              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            ></path></svg
          >Gratitude Reflections
        </div>
      </div>
      <div data-slot="card-content" class="px-6">
        <div class="grid gap-3 sm:grid-cols-2">
          <div class="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart w-4 h-4 text-primary mt-0.5 flex-shrink-0"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
            <p class="text-sm leading-relaxed">Grateful for watching an inspiring movie today.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart w-4 h-4 text-primary mt-0.5 flex-shrink-0"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
            <p class="text-sm leading-relaxed">
              Thankful for the fresh morning air during my walk.
            </p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart w-4 h-4 text-primary mt-0.5 flex-shrink-0"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
            <p class="text-sm leading-relaxed">I cherish the quiet moments of reflection.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart w-4 h-4 text-primary mt-0.5 flex-shrink-0"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
            <p class="text-sm leading-relaxed">
              Appreciative of the supportive messages from friends.
            </p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart w-4 h-4 text-primary mt-0.5 flex-shrink-0"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
            <p class="text-sm leading-relaxed">
              I'm grateful for the opportunity to learn something new.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      data-slot="card"
      class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-1 lg:col-span-1"
    >
      <div
        data-slot="card-header"
        class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
      >
        <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star w-5 h-5 text-primary"
          >
            <path
              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
            ></path></svg
          >Key Themes
        </div>
      </div>
      <div data-slot="card-content" class="px-6">
        <div class="flex flex-wrap gap-2">
          <span
            data-slot="badge"
            class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >Self-reflection</span
          ><span
            data-slot="badge"
            class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >Entertainment</span
          ><span
            data-slot="badge"
            class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >Nature</span
          >
        </div>
      </div>
    </div>
    <div
      data-slot="card"
      class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-2 lg:col-span-3"
    >
      <div
        data-slot="card-header"
        class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
      >
        <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-message-circle w-5 h-5 text-primary"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg
          >Your Day in Reflection
        </div>
      </div>
      <div data-slot="card-content" class="px-6">
        <div class="bg-card/50 p-4 rounded-lg border border-border">
          <p class="text-sm leading-relaxed italic text-foreground/90">
            "Today felt like a gentle journey of self-discovery. I found myself appreciating the
            small moments - from the inspiring film that moved me to the peaceful morning walk that
            cleared my mind. There's a sense of gratitude flowing through my thoughts, and I'm
            learning to embrace both the reflective quiet and the joy in simple pleasures."
          </p>
        </div>
      </div>
    </div>
    <div
      data-slot="card"
      class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-2 lg:col-span-3"
    >
      <div
        data-slot="card-header"
        class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
      >
        <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sparkles w-5 h-5 text-primary"
          >
            <path
              d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
            ></path>
            <path d="M20 3v4"></path>
            <path d="M22 5h-4"></path>
            <path d="M4 17v2"></path>
            <path d="M5 18H3"></path></svg
          >Gentle Guidance
        </div>
      </div>
      <div data-slot="card-content" class="px-6">
        <div class="bg-accent/5 p-4 rounded-lg border border-accent/20">
          <p class="text-sm leading-relaxed text-foreground/90">
            Your emotional awareness is beautiful. The gratitude you're expressing shows a healthy
            mindset. Consider continuing your morning walks as they seem to bring you peace.
            Remember, it's perfectly okay to have reflective days - they often lead to the most
            meaningful insights about ourselves.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
