<script setup lang="ts">
import type { DialogState } from '@/models/dialog.model'
import { dialogService } from '@/services/dialog.service'
import { useObservable } from '@vueuse/rxjs'

const initialValue: DialogState = {
  isOpen: false,
  activeDialog: null,
  dialogProps: {},
}
const dialogState = useObservable(dialogService.dialogState$, { initialValue })

function handleClose(payload: unknown) {
  dialogService.closeDialog(payload)
}
</script>

<template>
  <teleport to="body">
    <component
      v-if="dialogState.isOpen && dialogState.activeDialog"
      :is="dialogState.activeDialog"
      v-bind="dialogState.dialogProps"
      @close="handleClose"
    />
  </teleport>
</template>
