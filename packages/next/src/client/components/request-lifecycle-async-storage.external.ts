import type { AsyncLocalStorage } from 'async_hooks'

// Share the instance module in the next-shared layer
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
;('TURBOPACK { transition: next-shared }')
import { requestLifecycleAsyncStorage } from './request-lifecycle-async-storage-instance'

export type RequestLifecycleStore = {
  waitUntil: ((promise: Promise<any>) => void) | undefined
  onClose: ((callback: () => void) => void) | undefined
}

export type RequestLifecycleAsyncStorage =
  AsyncLocalStorage<RequestLifecycleStore>

export { requestLifecycleAsyncStorage }
