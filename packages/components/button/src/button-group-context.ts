import { inject } from 'vue'
import type { ContextType } from './use-button-group'

export const useButtonGroupContext = () => {
  return inject<undefined | ContextType & { isInGroup: boolean }>('context', undefined)
}
