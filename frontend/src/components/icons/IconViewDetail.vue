<template>
  <svg
    viewBox="0 0 32 32"
    width="32"
    height="32"
    role="img"
    aria-label="View analysis detail"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>View analysis detail</title>
    <!-- 背景圓 -->
    <circle cx="16" cy="16" r="16" fill="#60A5FA" />
    <!-- 藍色背景 -->

    <!-- 內容群組，整體置中 -->
    <g transform="translate(8,7)">
      <!-- 文件矩形 -->
      <rect
        x="0"
        y="0"
        width="12"
        height="16"
        rx="2"
        fill="#ffffff"
        stroke="#1E40AF"
        stroke-width="1"
      />
      <!-- 右上摺角 -->
      <path d="M9 0 H12 V5 H9 Z" fill="#BFDBFE" stroke="#93C5FD" stroke-width="0.5" />
      <!-- 文件上的線條 -->
      <rect x="2" y="3" width="8" height="1.2" rx="0.6" fill="#93C5FD" />
      <rect x="2" y="6" width="8" height="1.2" rx="0.6" fill="#93C5FD" />
      <rect x="2" y="9" width="5" height="1.2" rx="0.6" fill="#93C5FD" />
      <!-- 放大鏡（靠文件右下） -->
      <g transform="translate(6,10)">
        <circle cx="3" cy="3" r="3" fill="none" stroke="#1E40AF" stroke-width="1.4" />
        <rect
          x="5.5"
          y="5.5"
          width="4"
          height="1.2"
          rx="0.6"
          transform="rotate(45 5.5 5.5)"
          fill="#1E40AF"
        />
      </g>
    </g>
  </svg>
</template>
