import { type ComputedRef, inject } from 'vue'
import type { ContextType } from './use-button-group'

export const useButtonGroupContext = () => {
  return inject<ComputedRef<undefined | ContextType & { isInGroup: boolean }>>('context')
}
