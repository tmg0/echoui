import type { UseCheckboxReturn } from './use-checkbox'

type CheckboxIconProps = Partial<UseCheckboxReturn['getIconProps']['value']>

const CheckIcon = (props: CheckboxIconProps) => {
  return (
    <svg aria-hidden="true" role="presentation" viewBox="0 0 17 18" {...props}>
      <polyline
        fill="none"
        points="1 9 7 14 15 4"
        stroke="currentColor"
        stroke-dasharray={22}
        stroke-dashoffset={props.isSelected ? 44 : 66}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
        style={
          !props.disableAnimation && props.isSelected
            ? {
                transition: 'stroke-dashoffset 250ms linear 0.2s'
              }
            : {}
        }
      />
    </svg>
  )
}

const IndeterminateIcon = (props: CheckboxIconProps) => {
  return (
    <svg stroke="currentColor" stroke-width={3} viewBox="0 0 24 24" {...props}>
      <line x1="21" x2="3" y1="12" y2="12" />
    </svg>
  )
}

export const CheckboxIcon = (props: CheckboxIconProps) => {
  const { isIndeterminate, ...otherProps } = props
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon

  return <BaseIcon {...otherProps} />
}
