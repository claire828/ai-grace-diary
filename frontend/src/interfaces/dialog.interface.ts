import type { ComponentPublicInstance } from 'vue'

export interface Dialog extends ComponentPublicInstance {
  $emit(event: 'close', payload: unknown): void
  $emit(event: string, ...args: unknown[]): void
}
