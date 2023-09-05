import { defineComponent, type PropType } from 'vue'
import { useAvatar, type UseAvatarProps } from './use-avatar'

export type AvatarProps = UseAvatarProps

const props = {
  src: String,
  color: { type: String as PropType<AvatarProps['color']>, default: undefined },
  radius: { type: String as PropType<AvatarProps['radius']> },
  size: { type: String as PropType<AvatarProps['size']> },
  isBordered: { type: Boolean },
  isDisabled: { type: Boolean },
  isFocusable: { type: Boolean }
}

const Avatar = defineComponent({
  props,

  setup (props, { attrs }) {
    const { Component, getAvatarProps, getImageProps } = useAvatar(props)

    return () => (
      <Component {...getAvatarProps.value}>
        {props.src && <img {...getImageProps.value} alt={attrs.alt as string} />}
      </Component>
    )
  }
})

export { Avatar }
