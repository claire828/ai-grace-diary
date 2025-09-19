import type { Component } from 'vue'

/**
 * Dialog request configuration
 * Used when opening a new dialog via dialogService.openDialog()
 */
export interface DialogRequest {
  component: Component
  props: Record<string, unknown>
}

/**
 * Current dialog state
 * Represents the active dialog's UI state for DialogWrapper rendering
 */
export interface DialogState {
  isOpen: boolean
  activeDialog: Component | null
  dialogProps: Record<string, unknown>
}
