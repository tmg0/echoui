import { type ComputedRef, inject, computed } from 'vue'
import type { ContextType } from './use-button-group'

const defaultContext = computed(() => ({ isInGroup: false }))

export const useButtonGroupContext = () => {
  return inject<ComputedRef<undefined | ContextType & { isInGroup: boolean }>>('context', defaultContext)
}
