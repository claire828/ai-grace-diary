<script setup lang="ts"></script>

<template>
  <section id="tts-controls" class="bg-white rounded-xl shadow-sm border p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Text-to-Speech</h2>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <button class="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
          <i data-fa-i2svg=""
            ><svg
              class="svg-inline--fa fa-play w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              ></path></svg
          ></i>
        </button>
        <button class="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
          <i data-fa-i2svg=""
            ><svg
              class="svg-inline--fa fa-stop w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="stop"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              ></path></svg
          ></i>
        </button>
        <button class="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
          <i data-fa-i2svg=""
            ><svg
              class="svg-inline--fa fa-pause w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="pause"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
              ></path></svg
          ></i>
        </button>
      </div>
      <select class="border border-gray-200 rounded-lg px-3 py-2 text-sm text-neutral-700">
        <option>Read Diary</option>
        <option>Read Summary</option>
      </select>
    </div>
    <div class="mt-4 bg-gray-50 rounded-lg p-3">
      <div class="flex items-center text-sm text-gray-600">
        <i class="mr-2" data-fa-i2svg=""
          ><svg
            class="svg-inline--fa fa-volume-high w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="volume-high"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
            ></path></svg
        ></i>
        <span>Ready to read your diary entry</span>
      </div>
    </div>
  </section>
</template>
