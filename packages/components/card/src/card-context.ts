import { type ComputedRef, inject } from 'vue'
import type { ContextType } from './use-card'

export const useCardContext = () => {
  return inject<ComputedRef<ContextType>>('context')
}
