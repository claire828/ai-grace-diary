<script setup lang="ts"></script>

<template>
  <section id="analysis-section" class="bg-white rounded-xl shadow-sm border p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-6">Mood &amp; Stress Analysis</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Mood Chart -->
      <div id="mood-chart-container" class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-sm font-medium text-gray-700 mb-3">Mood Level</h3>
        <div id="mood-chart" class="h-32" data-highcharts-chart="0" style="overflow: hidden">
          <div
            id="highcharts-swxqv4z-0"
            dir="ltr"
            style="
              position: relative;
              overflow: hidden;
              width: 227px;
              height: 128px;
              text-align: left;
              line-height: normal;
              z-index: 0;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              user-select: none;
              touch-action: manipulation;
              outline: none;
              padding: 0px;
            "
            class="highcharts-container"
          >
            <svg
              version="1.1"
              class="highcharts-root"
              style="
                font-family:
                  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
                  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
                font-size: 1rem;
              "
              xmlns="http://www.w3.org/2000/svg"
              width="227"
              height="128"
              viewBox="0 0 227 128"
              role="img"
              aria-label=""
            >
              <desc>Created with Highcharts 12.4.0</desc>
              <defs>
                <filter id="highcharts-drop-shadow-0">
                  <feDropShadow
                    dx="1"
                    dy="1"
                    flood-color="#000000"
                    flood-opacity="0.75"
                    stdDeviation="2.5"
                  ></feDropShadow>
                </filter>
                <clipPath id="highcharts-swxqv4z-5-">
                  <rect x="0" y="0" width="207" height="226.50883032382407" fill="none"></rect>
                </clipPath>
                <clipPath id="highcharts-swxqv4z-6-">
                  <rect x="0" y="0" width="207" height="103" fill="none"></rect>
                </clipPath>
              </defs>
              <rect
                fill="transparent"
                class="highcharts-background"
                filter="none"
                x="0"
                y="0"
                width="227"
                height="128"
                rx="0"
                ry="0"
              ></rect>
              <rect
                fill="none"
                class="highcharts-plot-background"
                x="10"
                y="10"
                width="207"
                height="103"
                filter="none"
              ></rect>
              <g class="highcharts-pane-group" data-z-index="0">
                <path
                  fill="#EEE"
                  d="M 41.400000000000006 97.54999999999998 A 72.1 72.1 0 0 1 185.6 97.55000000000003 L 156.76 97.55000000000001 A 43.26 43.26 0 0 0 70.24000000000001 97.55 Z"
                  class="highcharts-pane"
                  stroke="#cccccc"
                  stroke-width="1"
                ></path>
              </g>
              <g
                class="highcharts-grid highcharts-xaxis-grid highcharts-radial-axis-grid"
                data-z-index="1"
              ></g>
              <g
                class="highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid"
                data-z-index="1"
              >
                <path
                  fill="none"
                  stroke="#e6e6e6"
                  stroke-width="0"
                  stroke-dasharray="none"
                  data-z-index="1"
                  class="highcharts-grid-line"
                  d="M 70.24000000000001 97.54999999999998 L 41.400000000000006 97.54999999999998"
                  opacity="1"
                ></path>
                <path
                  fill="none"
                  stroke="#e6e6e6"
                  stroke-width="0"
                  stroke-dasharray="none"
                  data-z-index="1"
                  class="highcharts-grid-line"
                  d="M 156.76 97.55000000000001 L 185.6 97.55000000000003"
                  opacity="1"
                ></path>
              </g>
              <rect
                fill="none"
                class="highcharts-plot-border"
                data-z-index="1"
                stroke="#cccccc"
                stroke-width="0"
                x="10"
                y="10"
                width="207"
                height="103"
              ></rect>
              <g
                class="highcharts-axis highcharts-xaxis highcharts-radial-axis"
                data-z-index="2"
              ></g>
              <g class="highcharts-axis highcharts-yaxis highcharts-radial-axis" data-z-index="2">
                <path
                  fill="none"
                  class="highcharts-axis-line"
                  stroke="#333333"
                  stroke-width="0"
                  data-z-index="7"
                  d="M 41.400000000000006 97.54999999999998 A 72.1 72.1 0 0 1 185.6 97.55 M 113.5 97.55 A 0 0 0 0 0 113.5 97.55"
                ></path>
              </g>
              <g class="highcharts-series-group" data-z-index="3" filter="none">
                <g
                  class="highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
                  data-z-index="0.1"
                  opacity="1"
                  transform="translate(10,10) scale(1 1)"
                  clip-path="url(#highcharts-swxqv4z-6-)"
                >
                  <path
                    fill="rgb(222,136,57)"
                    d="M 31.400000000000006 87.54999999999998 A 72.1 72.1 0 0 1 154.48239892355008 36.56760107644993 L 134.08943935413004 56.960560645869954 A 43.26 43.26 0 0 0 60.24 87.55 Z"
                    sweep-flag="0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="none"
                    stroke-width="0"
                    class="highcharts-point highcharts-color-0"
                  ></path>
                </g>
                <g
                  class="highcharts-markers highcharts-series-0 highcharts-solidgauge-series"
                  data-z-index="0.1"
                  opacity="1"
                  transform="translate(10,10) scale(1 1)"
                  clip-path="none"
                ></g>
              </g>
              <text
                x="114"
                class="highcharts-title"
                data-z-index="4"
                text-align="center"
                y="25"
                text-anchor="middle"
                transform-origin="10 22"
                transform="translate(0,0) scale(1 1)"
                style="font-size: 1.2em"
              ></text>
              <text
                x="114"
                class="highcharts-subtitle"
                data-z-index="4"
                text-align="center"
                y="24"
                text-anchor="middle"
                transform-origin="10 15"
                transform="translate(0,0) scale(1 1)"
                style="font-size: 0.8em; fill: rgb(102, 102, 102)"
              ></text>
              <text
                x="10"
                text-anchor="start"
                class="highcharts-caption"
                data-z-index="4"
                style="font-size: 0.8em; fill: rgb(102, 102, 102)"
                text-align="left"
                y="125"
                transform-origin="10 15"
                transform="translate(0,0) scale(1 1)"
              ></text>
              <g class="highcharts-datalabels-group" data-z-index="6">
                <g
                  class="highcharts-data-labels highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
                  data-z-index="2"
                  opacity="1"
                  transform="translate(10,10) scale(1 1)"
                  style="visibility: inherit; opacity: 1"
                >
                  <g
                    class="highcharts-label highcharts-data-label highcharts-data-label-color-0 highcharts-tracker"
                    data-z-index="1"
                    filter="none"
                    transform="translate(81,79)"
                    style="visibility: inherit"
                  ></g>
                </g>
              </g>
              <g
                class="highcharts-legend highcharts-no-tooltip"
                data-z-index="7"
                visibility="hidden"
              >
                <rect
                  fill="none"
                  class="highcharts-legend-box"
                  rx="0"
                  ry="0"
                  stroke="#999999"
                  stroke-width="0"
                  filter="none"
                  x="0"
                  y="0"
                  width="8"
                  height="8"
                ></rect>
                <g data-z-index="1"><g></g></g>
              </g>
              <g
                class="highcharts-axis-labels highcharts-xaxis-labels highcharts-radial-axis-labels"
                data-z-index="7"
              ></g>
              <g
                class="highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels"
                data-z-index="7"
              >
                <text
                  x="66.4"
                  text-anchor="middle"
                  transform="translate(0,0)"
                  style="cursor: default; font-size: 0.8em; fill: rgb(51, 51, 51)"
                  y="113.55"
                  opacity="1"
                >
                  0
                </text>
                <text
                  x="160.6"
                  text-anchor="middle"
                  transform="translate(0,0)"
                  style="cursor: default; font-size: 0.8em; fill: rgb(51, 51, 51)"
                  y="113.55000000000001"
                  opacity="1"
                >
                  100
                </text>
              </g>
              <g
                class="highcharts-label highcharts-tooltip highcharts-color-0"
                data-z-index="8"
                filter="url(#highcharts-drop-shadow-0)"
                style="cursor: default; pointer-events: none"
                transform="translate(70,51)"
                opacity="0"
                visibility="hidden"
              >
                <path
                  fill="#ffffff"
                  class="highcharts-label-box highcharts-tooltip-box"
                  d="M 3 0 L 86 0 A 3 3 0 0 1 89 3 L 89 28 A 3 3 0 0 1 86 31 L 50 31 L 44 37 L 38 31 L 3 31 A 3 3 0 0 1 0 28 L 0 3 A 3 3 0 0 1 3 0 Z"
                  stroke-width="0"
                  stroke="rgb(222,136,57)"
                ></path>
                <text x="8" data-z-index="1" y="20" style="font-size: 0.8em; fill: rgb(51, 51, 51)">
                  <tspan style="color: rgb(222, 136, 57); fill: rgb(222, 136, 57)">●</tspan>
                  Mood:
                  <tspan style="font-weight: bold">75</tspan>
                  <tspan class="highcharts-br">​</tspan>
                </text>
              </g>
            </svg>
            <div
              class="highcharts-datalabels-group"
              style="position: absolute; left: 0px; top: 0px; opacity: 1"
            >
              <div
                class="highcharts-data-labels highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
                style="position: absolute; left: 10px; top: 10px; opacity: 1; visibility: inherit"
              >
                <div
                  class="highcharts-label highcharts-data-label highcharts-data-label-color-0 highcharts-tracker"
                  style="position: absolute; left: 81px; top: 79px; opacity: 1; visibility: inherit"
                >
                  <span
                    data-z-index="1"
                    style="
                      position: absolute;
                      font-family:
                        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
                      font-size: 0.7em;
                      white-space: nowrap;
                      color: rgb(0, 0, 0);
                      font-weight: bold;
                      margin-left: 0px;
                      margin-top: 0px;
                      left: 5px;
                      top: 5px;
                      text-align: center;
                      transform-origin: 23px 16px;
                    "
                    ><div style="text-align: center">
                      <span style="font-size: 16px">75%</span>
                    </div></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stress Chart -->
      <div id="stress-chart-container" class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-sm font-medium text-gray-700 mb-3">Stress Level</h3>
        <div id="stress-chart" class="h-32" data-highcharts-chart="1" style="overflow: hidden">
          <div
            id="highcharts-swxqv4z-7"
            dir="ltr"
            style="
              position: relative;
              overflow: hidden;
              width: 227px;
              height: 128px;
              text-align: left;
              line-height: normal;
              z-index: 0;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              user-select: none;
              touch-action: manipulation;
              outline: none;
              padding: 0px;
            "
            class="highcharts-container"
          >
            <svg
              version="1.1"
              class="highcharts-root"
              style="
                font-family:
                  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
                  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
                font-size: 1rem;
              "
              xmlns="http://www.w3.org/2000/svg"
              width="227"
              height="128"
              viewBox="0 0 227 128"
              role="img"
              aria-label=""
            >
              <desc>Created with Highcharts 12.4.0</desc>
              <defs>
                <filter id="highcharts-drop-shadow-1">
                  <feDropShadow
                    dx="1"
                    dy="1"
                    flood-color="#000000"
                    flood-opacity="0.75"
                    stdDeviation="2.5"
                  ></feDropShadow>
                </filter>
                <clipPath id="highcharts-swxqv4z-12-">
                  <rect x="0" y="0" width="207" height="226.50883032382407" fill="none"></rect>
                </clipPath>
                <clipPath id="highcharts-swxqv4z-13-">
                  <rect x="0" y="0" width="207" height="103" fill="none"></rect>
                </clipPath>
              </defs>
              <rect
                fill="transparent"
                class="highcharts-background"
                filter="none"
                x="0"
                y="0"
                width="227"
                height="128"
                rx="0"
                ry="0"
              ></rect>
              <rect
                fill="none"
                class="highcharts-plot-background"
                x="10"
                y="10"
                width="207"
                height="103"
                filter="none"
              ></rect>
              <g class="highcharts-pane-group" data-z-index="0">
                <path
                  fill="#EEE"
                  d="M 41.400000000000006 97.54999999999998 A 72.1 72.1 0 0 1 185.6 97.55000000000003 L 156.76 97.55000000000001 A 43.26 43.26 0 0 0 70.24000000000001 97.55 Z"
                  class="highcharts-pane"
                  stroke="#cccccc"
                  stroke-width="1"
                ></path>
              </g>
              <g
                class="highcharts-grid highcharts-xaxis-grid highcharts-radial-axis-grid"
                data-z-index="1"
              ></g>
              <g
                class="highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid"
                data-z-index="1"
              >
                <path
                  fill="none"
                  stroke="#e6e6e6"
                  stroke-width="0"
                  stroke-dasharray="none"
                  data-z-index="1"
                  class="highcharts-grid-line"
                  d="M 70.24000000000001 97.54999999999998 L 41.400000000000006 97.54999999999998"
                  opacity="1"
                ></path>
                <path
                  fill="none"
                  stroke="#e6e6e6"
                  stroke-width="0"
                  stroke-dasharray="none"
                  data-z-index="1"
                  class="highcharts-grid-line"
                  d="M 156.76 97.55000000000001 L 185.6 97.55000000000003"
                  opacity="1"
                ></path>
              </g>
              <rect
                fill="none"
                class="highcharts-plot-border"
                data-z-index="1"
                stroke="#cccccc"
                stroke-width="0"
                x="10"
                y="10"
                width="207"
                height="103"
              ></rect>
              <g
                class="highcharts-axis highcharts-xaxis highcharts-radial-axis"
                data-z-index="2"
              ></g>
              <g class="highcharts-axis highcharts-yaxis highcharts-radial-axis" data-z-index="2">
                <path
                  fill="none"
                  class="highcharts-axis-line"
                  stroke="#333333"
                  stroke-width="0"
                  data-z-index="7"
                  d="M 41.400000000000006 97.54999999999998 A 72.1 72.1 0 0 1 185.6 97.55 M 113.5 97.55 A 0 0 0 0 0 113.5 97.55"
                ></path>
              </g>
              <g class="highcharts-series-group" data-z-index="3" filter="none">
                <g
                  class="highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
                  data-z-index="0.1"
                  opacity="1"
                  transform="translate(10,10) scale(1 1)"
                  clip-path="url(#highcharts-swxqv4z-13-)"
                >
                  <path
                    fill="rgb(170,211,30)"
                    d="M 31.400000000000006 87.54999999999998 A 72.1 72.1 0 0 1 70.76728496877868 23.308429606018677 L 83.86037098126721 49.005057763611205 A 43.26 43.26 0 0 0 60.24 87.55 Z"
                    sweep-flag="0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="none"
                    stroke-width="0"
                    class="highcharts-point highcharts-color-0"
                  ></path>
                </g>
                <g
                  class="highcharts-markers highcharts-series-0 highcharts-solidgauge-series"
                  data-z-index="0.1"
                  opacity="1"
                  transform="translate(10,10) scale(1 1)"
                  clip-path="none"
                ></g>
              </g>
              <text
                x="114"
                class="highcharts-title"
                data-z-index="4"
                text-align="center"
                y="25"
                text-anchor="middle"
                transform-origin="10 22"
                transform="translate(0,0) scale(1 1)"
                style="font-size: 1.2em"
              ></text>
              <text
                x="114"
                class="highcharts-subtitle"
                data-z-index="4"
                text-align="center"
                y="24"
                text-anchor="middle"
                transform-origin="10 15"
                transform="translate(0,0) scale(1 1)"
                style="font-size: 0.8em; fill: rgb(102, 102, 102)"
              ></text>
              <text
                x="10"
                text-anchor="start"
                class="highcharts-caption"
                data-z-index="4"
                style="font-size: 0.8em; fill: rgb(102, 102, 102)"
                text-align="left"
                y="125"
                transform-origin="10 15"
                transform="translate(0,0) scale(1 1)"
              ></text>
              <g class="highcharts-datalabels-group" data-z-index="6">
                <g
                  class="highcharts-data-labels highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
                  data-z-index="2"
                  opacity="1"
                  transform="translate(10,10) scale(1 1)"
                  style="visibility: inherit; opacity: 1"
                >
                  <g
                    class="highcharts-label highcharts-data-label highcharts-data-label-color-0 highcharts-tracker"
                    data-z-index="1"
                    filter="none"
                    transform="translate(80,79)"
                    style="visibility: inherit"
                  ></g>
                </g>
              </g>
              <g
                class="highcharts-legend highcharts-no-tooltip"
                data-z-index="7"
                visibility="hidden"
              >
                <rect
                  fill="none"
                  class="highcharts-legend-box"
                  rx="0"
                  ry="0"
                  stroke="#999999"
                  stroke-width="0"
                  filter="none"
                  x="0"
                  y="0"
                  width="8"
                  height="8"
                ></rect>
                <g data-z-index="1"><g></g></g>
              </g>
              <g
                class="highcharts-axis-labels highcharts-xaxis-labels highcharts-radial-axis-labels"
                data-z-index="7"
              ></g>
              <g
                class="highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels"
                data-z-index="7"
              >
                <text
                  x="66.4"
                  text-anchor="middle"
                  transform="translate(0,0)"
                  style="cursor: default; font-size: 0.8em; fill: rgb(51, 51, 51)"
                  y="113.55"
                  opacity="1"
                >
                  0
                </text>
                <text
                  x="160.6"
                  text-anchor="middle"
                  transform="translate(0,0)"
                  style="cursor: default; font-size: 0.8em; fill: rgb(51, 51, 51)"
                  y="113.55000000000001"
                  opacity="1"
                >
                  100
                </text>
              </g>
              <g
                class="highcharts-label highcharts-tooltip highcharts-color-0"
                data-z-index="8"
                filter="url(#highcharts-drop-shadow-1)"
                style="cursor: default; pointer-events: none"
                transform="translate(67,51)"
                opacity="0"
                visibility="hidden"
              >
                <path
                  fill="#ffffff"
                  class="highcharts-label-box highcharts-tooltip-box"
                  d="M 3 0 L 90 0 A 3 3 0 0 1 93 3 L 93 28 A 3 3 0 0 1 90 31 L 53 31 L 47 37 L 41 31 L 3 31 A 3 3 0 0 1 0 28 L 0 3 A 3 3 0 0 1 3 0 Z"
                  stroke-width="0"
                  stroke="rgb(170,211,30)"
                ></path>
                <text x="8" data-z-index="1" y="20" style="font-size: 0.8em; fill: rgb(51, 51, 51)">
                  <tspan style="color: rgb(170, 211, 30); fill: rgb(170, 211, 30)">●</tspan>
                  Stress:
                  <tspan style="font-weight: bold">35</tspan>
                  <tspan class="highcharts-br">​</tspan>
                </text>
              </g>
            </svg>
            <div
              class="highcharts-datalabels-group"
              style="position: absolute; left: 0px; top: 0px; opacity: 1"
            >
              <div
                class="highcharts-data-labels highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
                style="position: absolute; left: 10px; top: 10px; opacity: 1; visibility: inherit"
              >
                <div
                  class="highcharts-label highcharts-data-label highcharts-data-label-color-0 highcharts-tracker"
                  style="position: absolute; left: 80px; top: 79px; opacity: 1; visibility: inherit"
                >
                  <span
                    data-z-index="1"
                    style="
                      position: absolute;
                      font-family:
                        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
                      font-size: 0.7em;
                      white-space: nowrap;
                      color: rgb(0, 0, 0);
                      font-weight: bold;
                      margin-left: 0px;
                      margin-top: 0px;
                      left: 5px;
                      top: 5px;
                      text-align: center;
                      transform-origin: 23.5px 16px;
                    "
                    ><div style="text-align: center">
                      <span style="font-size: 16px">35%</span>
                    </div></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
