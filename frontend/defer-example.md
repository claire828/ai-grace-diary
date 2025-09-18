# RxJS defer() 詳細解釋

## 1. 沒有 defer 的問題

```typescript
// ❌ 立即執行版本
const badAnalyze$ = (id: number) => {
  console.log('設定狀態為 analyzing') // 🚨 立即執行！
  updateStatus(id, 'analyzing')

  return postJSON('/analyze').pipe(tap(() => console.log('API 完成')))
}

// 呼叫時：
const stream = badAnalyze$(123) // 🚨 立即印出 "設定狀態為 analyzing"
// 但還沒訂閱！可能永遠不會訂閱...
```

## 2. 使用 defer 的正確方式

```typescript
// ✅ 延遲執行版本
const goodAnalyze$ = (id: number) => {
  return defer(() => {
    console.log('設定狀態為 analyzing') // ✅ 只在訂閱時執行
    updateStatus(id, 'analyzing')

    return postJSON('/analyze')
  }).pipe(tap(() => console.log('API 完成')))
}

// 呼叫時：
const stream = goodAnalyze$(123) // ✅ 什麼都不印出
stream.subscribe() // ✅ 現在才印出 "設定狀態為 analyzing"
```

## 3. defer 的核心概念

### Cold vs Hot Observable

- **Cold Observable**: 每次訂閱都重新執行
- **Hot Observable**: 不管有沒有訂閱都在執行

```typescript
// Cold Observable (defer 創建的)
const cold$ = defer(() => {
  console.log('執行副作用')
  return of(1)
})

cold$.subscribe() // 印出 "執行副作用"
cold$.subscribe() // 再次印出 "執行副作用" (重新執行)

// Hot Observable
const hot$ = of(1).pipe(
  tap(() => console.log('執行副作用')), // 每次訂閱都執行
)
```

## 4. 實際使用場景

### 場景 1: API 呼叫

```typescript
// ❌ 錯誤：立即發送請求
const fetchData$ = postJSON('/api/data')

// ✅ 正確：延遲到訂閱時才發送
const fetchData$ = defer(() => postJSON('/api/data'))
```

### 場景 2: 狀態更新

```typescript
// ❌ 錯誤：立即更新狀態
function startProcess() {
  setStatus('loading') // 立即執行
  return apiCall$
}

// ✅ 正確：延遲到需要時才更新
function startProcess() {
  return defer(() => {
    setStatus('loading') // 訂閱時執行
    return apiCall$
  })
}
```

## 5. defer 的優勢

1. **延遲執行**: 避免不必要的副作用
2. **多次訂閱**: 每次訂閱都重新執行
3. **錯誤隔離**: 每次訂閱的錯誤是獨立的
4. **資源管理**: 更好的記憶體和資源管理
5. **可測試性**: 更容易進行單元測試

## 6. 簡單記憶法

**defer = "推遲到需要時"**

```typescript
// 不用 defer
const immediate = doSomething() // 立即執行

// 用 defer
const delayed = defer(() => doSomething()) // 訂閱時才執行
```
