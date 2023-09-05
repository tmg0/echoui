import { inject } from 'vue'
import type { ContextType } from './use-card'

export const useCardContext = () => {
  return inject<ContextType>('context')
}
