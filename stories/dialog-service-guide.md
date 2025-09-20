# 🗨️ Dialog Service System

A modern, reactive dialog management system built with Vue 3, TypeScript, and RxJS. This system provides a clean separation between UI components and business logic, enabling dynamic dialog rendering with type safety.

## 📋 Table of Contents

- [System Flow Diagram](#system-flow-diagram)
- [Overview](#overview)
- [Architecture](#architecture)
- [Usage](#usage)
- [Implementation Guide](#implementation-guide)
- [API Reference](#api-reference)

## 🎯 Overview

The Dialog Service System consists of three main parts:

1. **DialogService** - Pure TypeScript service for dialog state management
2. **DialogWrapper** - Vue component for rendering dialogs using `<teleport>`
3. **Dialog Components** - Individual dialog implementations (e.g., ConfirmDialog)

## System Flow Diagram

```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────┐
│  Component  │    │ DialogService│    │DialogWrapper │    │ DialogComp.  │    │ User │
└──────┬──────┘    └──────┬───────┘    └──────┬───────┘    └──────┬───────┘    └───┬──┘
       │                  │                   │                   │                │
       │ openDialog$()    │                   │                   │                │
       ├─────────────────►│                   │                   │                │
       │                  │ dialogState$      │                   │                │
       │                  ├──────────────────►│                   │                │
       │                  │                   │ render component  │                │
       │                  │                   ├──────────────────►│                │
       │                  │                   │                   │ display dialog │
       │                  │                   │                   ├───────────────►│
       │                  │                   │                   │                │
       │                  │                   │                   │ user clicks    │
       │                  │                   │                   │◄───────────────┤
       │                  │                   │ $emit('close')    │                │
       │                  │                   │◄──────────────────┤                │
       │                  │ closeDialog()     │                   │                │
       │                  │◄──────────────────┤                   │                │
       │                  │                   │                   │                │
       │ Observable emits │                   │                   │                │
       │◄─────────────────┤                   │                   │                │
       │                  │ dialogState$      │                   │                │
       │                  ├──────────────────►│                   │                │
       │                  │                   │ component unmount │                │
       │                  │                   ├──────────────────►│                │
```

## 🏗️ Architecture

### File Structure

```
frontend/src/
├── components/dialog/
│   ├── DialogWrapper.vue      # Global dialog renderer
│   └── ConfirmDialog.vue      # Example dialog component
├── services/
│   └── DialogService.ts       # Core dialog service
├── models/
│   └── dialog.model.ts        # TypeScript interfaces
└── interfaces/
    └── dialog.interface.ts    # Component interface definition
```

### Core Components

1. **DialogService** (`services/DialogService.ts`)

   - Manages dialog state using RxJS Subjects
   - Provides reactive API for opening/closing dialogs
   - Returns Observables for handling dialog responses

2. **DialogWrapper** (`components/dialog/DialogWrapper.vue`)

   - Subscribes to DialogService state changes
   - Renders active dialog using dynamic components
   - Uses `<teleport>` to render dialogs in document body

3. **Dialog Components** (e.g., `ConfirmDialog.vue`)
   - Individual dialog implementations
   - Must emit 'close' event with payload
   - Can be styled and customized independently

## 🚀 Usage

### Basic Example - Two Ways to Handle Results

#### Method 1: Using useObservable (Recommended for Vue)

```typescript
// In any Vue component
import { dialogService } from '@/services/dialog.service';
import { useObservable } from '@vueuse/rxjs';
import ConfirmDialog from '@/components/dialog/ConfirmDialog.vue';

function showConfirmDialog() {
  const result = useObservable(dialogService.openDialog$(ConfirmDialog, props));
  watch(result, (value) => {});
}
```

#### Method 2: Using Direct Observable Subscription

```typescript
// In any Vue component
import { dialogService } from '@/services/dialog.service';
import ConfirmDialog from '@/components/dialog/ConfirmDialog.vue';

function showConfirmDialog() {
  dialogService.openDialog$(ConfirmDialog, props).subscribe();
}
```

### Setup in App.vue

```html
<template>
  <router-view />

  <!-- Global dialog wrapper -->
  <DialogWrapper />
</template>

<script setup lang="ts">
  import DialogWrapper from '@/components/dialog/DialogWrapper.vue';
</script>
```

## 🛠️ Implementation Guide

### Creating a New Dialog Component

Here's how to create a custom dialog component that works with the Dialog Service:

```html
<!-- CustomDialog.vue -->
<template>
  <div class="dialog-overlay">
    <div class="dialog-content">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>

      <div class="actions">
        <button @click="handleCancel">Cancel</button>
        <button @click="handleConfirm">OK</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    message: string;
  }>();

  const emit = defineEmits<{
    close: [payload: string];
  }>();

  function handleCancel() {
    emit('close', 'cancelled');
  }

  function handleConfirm() {
    emit('close', 'confirmed');
  }
</script>
```

### Key Requirements for Dialog Components

1. **Props Definition** - Define props interface with `defineProps<T>()`
2. **Emit Declaration** - Use `defineEmits<T>()` to declare the 'close' event
3. **Event Emission** - Call `emit('close', payload)` when user interaction completes
4. **Meaningful Payloads** - Return data that helps the caller understand the result

#### 🎯 Critical: The `defineEmits` Setup

**Every dialog component MUST implement this emit declaration:**

```typescript
const emit = defineEmits<{
  close: [payload: string | boolean | object];
}>();

// === Different Payload Types ===
// Boolean payload (for simple yes/no dialogs)
const emit = defineEmits<{
  close: [payload: boolean];
}>();

// String payload (for action-based dialogs)
const emit = defineEmits<{
  close: [payload: 'save' | 'cancel' | 'delete'];
}>();

// Object payload (for complex form dialogs)
const emit = defineEmits<{
  close: [payload: { action: string; data?: unknown }];
}>();

// Union type (for flexible dialogs)
const emit = defineEmits<{
  close: [payload: boolean | string | { action: string; data: unknown }];
}>();
```

**Usage in Template:**

```html
<!-- Simple boolean -->
<button @click="emit('close', true)">Confirm</button>
<button @click="emit('close', false)">Cancel</button>

<!-- String action -->
<button @click="emit('close', 'save')">Save</button>

<!-- Object payload -->
<button @click="emit('close', { action: 'save', data: formData })">Save</button>
```

## 📚 API Reference

### `openDialog$(component, props?): Observable<unknown>`

Opens a dialog and returns an Observable that emits when the dialog closes.

- **Parameters:**
  - `component`: Vue component to render as dialog
  - `props`: Object with props to pass to the component
- **Returns:** Observable that emits the close payload and completes
- **Example:**
  ```typescript
  dialogService.openDialog$(ConfirmDialog, { title: 'Confirm' });
  ```

### `closeDialog(payload): void`

Closes the currently open dialog with the given payload.

- **Parameters:**
  - `payload`: Data to emit to openDialog$ subscribers
- **Usage:** Usually called internally by DialogWrapper, but can be called manually
- **Example:**
  ```typescript
  dialogService.closeDialog(true);
  dialogService.closeDialog({ action: 'save', data: formData });
  ```

#### DialogState Interface

```typescript
interface DialogState {
  isOpen: boolean; // Whether dialog is currently open
  activeDialog: Component | null; // Current dialog component
  dialogProps: Record<string, unknown>; // Props for the dialog
}
```

### Dialog Component Requirements

- Must emit `'close'` event when user interaction completes
- Can emit any payload type (boolean, string, object, etc.)
- Should use `defineEmits` for type safety
