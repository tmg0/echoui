import { inject } from 'vue'
import type { useNavbar } from './use-navbar'

export const useNavbarContext = () => {
  return inject<undefined | ReturnType<typeof useNavbar>>('context', undefined)
}
