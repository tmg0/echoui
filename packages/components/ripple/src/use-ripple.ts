import { onUnmounted, ref, watchEffect } from 'vue'

export type RippleType = {
  key: number
  x: number
  y: number
  size: number
}

export interface UseRippleProps {
  /**
  /**
   * The time to remove the ripples in ms.
   * @default 1000
   */
  removeAfter?: number
}

export function useRipple (props: UseRippleProps = {}) {
  const { removeAfter = 1000, ...otherProps } = props

  const timeoutIds: number[] = []
  const ripples = ref<RippleType[]>([])

  watchEffect(() => {
    ripples.value.forEach((_, i) => {
      const timeoutId = setTimeout(() => {
        ripples.value = ripples.value.filter((_, index) => index !== i)
      }, removeAfter)
      timeoutIds.push(timeoutId)
    })
  })

  onUnmounted(() => {
    timeoutIds.forEach(id => clearTimeout(id))
  })

  const onClick = (event: MouseEvent) => {
    const trigger = event.currentTarget as HTMLElement

    const size = Math.max(trigger.clientWidth, trigger.clientHeight)
    const rect = trigger.getBoundingClientRect()

    ripples.value = [...ripples.value, {
      key: new Date().getTime(),
      size,
      x: event.clientX - rect.x - size / 2,
      y: event.clientY - rect.y - size / 2
    }]
  }

  return { ripples, onClick, ...otherProps }
}

export type UseRippleReturn = ReturnType<typeof useRipple>;
