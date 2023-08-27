import { computed } from 'vue'
import { spinner, type SpinnerVariantProps } from '@nextui-org/theme'

interface Props {
  /**
   * Spinner label, in case you passed it will be used as `aria-label`.
   */
  label?: string;
}

export type UseSpinnerProps = Props & SpinnerVariantProps;

export const useSpinner = (props: UseSpinnerProps): any => {
  const { label: labelProp, ...otherProps } = props
  const slots = computed(() => spinner({ ...props }))

  const label = labelProp

  const ariaLabel = computed(() => {
    if (label && typeof label === 'string') {
      return label
    }

    return ''
  })

  const getSpinnerProps = computed(() => ({
    'aria-label': ariaLabel,
    ...otherProps
  }))

  return { label, slots, getSpinnerProps }
}
