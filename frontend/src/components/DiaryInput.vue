<script setup lang="ts">
import { ref } from 'vue'
const wordsMax = 2000
const diaryRef = ref('')

// const today = new Date().toLocaleDateString('en-US', {
//   year: 'numeric',
//   month: 'long', // full month name, e.g., September
//   day: 'numeric',
// })

// TODO: 比對日期，是否過了一天，如果不同天就要跳出確認視窗
function write() {
  console.log('write:', diaryRef.value)
}
</script>

<template>
  <!--insights-section-->
  <section class="space-y-3 flex justify-between">
    <div class="p-4 bg-purple-50 rounded-xl border border-purple-100">
      <div class="flex items-start space-x-3">
        <i class="text-purple-500 mt-1" data-fa-i2svg=""
          ><svg
            class="svg-inline--fa fa-lightbulb h-4 w-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="lightbulb"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
            ></path></svg
        ></i>
        <p class="text-sm text-gray-700">
          Write your diary entry to unlock AI-powered insights about your emotional patterns and
          daily reflections.
        </p>
      </div>
    </div>
  </section>

  <!-- Write-->
  <section class="bg-white rounded-2xl shadow-sm border p-6">
    <!-- title-->
    <div class="flex items-center justify-between mb-4 text-zinc-800">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">How was your day today?</h2>
        <p class="text-gray-600">
          Take a moment to reflect on your experiences, emotions, and thoughts from today.
        </p>
      </div>

      <section id="status-indicator" class="flex items-center space-x-3 p-4">
        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span class="text-sm font-medium text-green-700">Editable - Ready for your thoughts</span>
        <i class="text-green-600 text-sm" data-fa-i2svg=""
          ><svg
            class="svg-inline--fa fa-pencil w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="pencil"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
            ></path></svg
        ></i>
      </section>
      <!-- <span class="text-sm text-gray-500">{{ today }} </span> -->
    </div>

    <!-- text area-->
    <textarea
      v-model="diaryRef"
      maxlength="wordsMax"
      class="w-full h-96 p-6 border-2 border-purple-100 rounded-2xl focus:border-purple-300 focus:outline-none resize-none text-gray-700 leading-relaxed"
      placeholder="Today I felt... I accomplished... I learned... I'm grateful for...

What made me smile today?
What challenged me?
What am I looking forward to tomorrow?"
    ></textarea>
    <!-- bottom-->
    <div class="flex justify-between items-center mt-4">
      <span class="text-sm text-gray-500"> {{ diaryRef.length }} / {{ wordsMax }} words</span>

      <div class="flex items-center space-x-4">
        <button
          @click="write"
          class="px-6 py-3 text-gray-500 hover:text-gray-800 transition-colors"
        >
          Save Draft
        </button>
        <button
          class="flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl hover:from-purple-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-lg"
        >
          <i class="mr-2" data-fa-i2svg=""
            ><svg
              class="svg-inline--fa fa-brain w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="brain"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"
              ></path></svg
          ></i>
          Analyze My Day
        </button>
      </div>
    </div>
  </section>
</template>
