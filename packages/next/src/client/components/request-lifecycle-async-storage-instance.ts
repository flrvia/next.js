import { createAsyncLocalStorage } from './async-local-storage'
import type { RequestLifecycleAsyncStorage } from './request-lifecycle-async-storage.external'

export const requestLifecycleAsyncStorage: RequestLifecycleAsyncStorage =
  createAsyncLocalStorage()
