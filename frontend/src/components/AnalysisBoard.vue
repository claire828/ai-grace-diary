<script setup lang="ts"></script>

<template>
  <section id="analysis-section" class="bg-white rounded-xl shadow-sm border p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-6">Mood &amp; Stress Analysis</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Mood -->
      <div id="mood-chart-container" class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-sm font-bold text-gray-700 mb-3">Stress Level</h3>
        <p class="text-red-700 font-bold text-2xl">4</p>
        <p class="text-gray-700">Felt overwhelmed by work and personal tasks today.</p>
      </div>

      <!-- Stress -->
      <div id="stress-chart-container" class="bg-gray-50 rounded-lg p-4 text-gray-700">
        <h3 class="text-sm font-bold mb-3">Mood Level: (Positive / Negative Ratio)</h3>
        <div class="w-full bg-purple-200 rounded-full h-6 relative">
          <div class="bg-purple-600 h-6 rounded-full" style="width: 70%"></div>
          <div
            class="absolute inset-0 flex justify-center items-center font-semibold text-shadow-neutral-900"
          >
            70% Positive / 30% Negative
          </div>
        </div>
        <!-- Emotional State -->

        <ul class="mt-2 text-gray-500">
          <li class="flex items-center">
            <p class="font-bold text-sm mr-2">Category:</p>
            <p class="font-medium text-blue-500 text-shadow-neutral-900">Negative</p>
          </li>

          <li class="flex items-center">
            <p class="font-bold text-sm mr-2">Mood Words:</p>
            <p class="font-medium text-blue-500 text-shadow-neutral-900">
              Anxious, Tired, Stressed
            </p>
          </li>

          <li class="flex items-center">
            <p class="font-bold text-sm mr-2">Intensity:</p>
            <p class="font-medium text-blue-500 text-shadow-neutral-900">High</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
