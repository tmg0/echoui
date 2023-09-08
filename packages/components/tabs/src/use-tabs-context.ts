import { inject, ref, type Ref } from 'vue'

export interface SharedCursor {
  x?: number
  y?: number
  width?: number
}

export interface TabsContext {
  tabsRef: Ref<HTMLElement | undefined>
  sharedCursor: Ref<SharedCursor>
}

const defaultCtx = {
  tabsRef: ref(),
  sharedCursor: ref({})
}

export const useTabsContext = () => {
  return inject<TabsContext>('context', defaultCtx)
}
