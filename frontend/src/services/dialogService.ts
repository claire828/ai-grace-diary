import { Observable, Subject, take } from 'rxjs'
import type { Component } from 'vue'

export interface DialogRequest {
  component: Component
  props: Record<string, unknown>
}

export interface DialogState {
  isOpen: boolean
  activeDialog: Component | null
  dialogProps: Record<string, unknown>
}

class DialogService {
  private dialogStateSubject = new Subject<DialogState>()
  private dialogResponseSubject = new Subject<unknown>()
  public dialogState$ = this.dialogStateSubject.asObservable()

  /**
   * @API - Open a dialog and wait for user response
   * @param component - Vue dialog component
   * @param props - Component props
   * @returns Observable that emits close payload
   * @example const result = useObservable(dialogService.openDialog$(ConfirmDialog$, props)))
   * @example dialogService.openDialog$(ConfirmDialog$, props).subscribe(result => ...)
   */
  openDialog$(component: Component, props: Record<string, unknown> = {}): Observable<unknown> {
    this.dialogStateSubject.next({
      isOpen: true,
      activeDialog: component,
      dialogProps: props,
    })
    return this.dialogResponseSubject.pipe(take(1))
  }

  /**
   * @API Close dialog with payload
   * @param payload - Data to emit to subscribers
   * @example dialogService.closeDialog(payload)
   */
  closeDialog(payload: unknown): void {
    this.dialogStateSubject.next({
      isOpen: false,
      activeDialog: null,
      dialogProps: {},
    })
    this.dialogResponseSubject.next(payload)
  }
}
export const dialogService = new DialogService()
