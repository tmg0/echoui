import { inject, type ComputedRef } from 'vue'
import type { ContextType } from './use-button-group'

export const useButtonGroupContext = () => {
  return inject<undefined | ComputedRef<ContextType>>('context', undefined)
}
