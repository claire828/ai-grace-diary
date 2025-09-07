declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<unknown, unknown, Record<string, unknown>>
  export default component
}
