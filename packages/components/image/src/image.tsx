import { defineComponent, type PropType } from 'vue'
import { useImage, type UseImageProps } from './use-image'

export interface ImageProps extends UseImageProps {}

const props = {
  src: { type: String, default: undefined },
  removeWrapper: Boolean,
  isBlurred: Boolean,
  isZoomed: Boolean,
  disableSkeleton: Boolean,
  fallbackSrc: String,
  loading: { type: String as PropType<ImageProps['loading']>, default: undefined },
  width: { type: [String, Number] as PropType<ImageProps['width']>, default: undefined },
  radius: { type: [String, Number] as PropType<ImageProps['radius']>, default: undefined },
  shadow: { type: [String, Number] as PropType<ImageProps['shadow']>, default: undefined },
  alt: String,
  sizes: String
}

const Image = defineComponent({
  props,

  setup (props) {
    const { Component, slots, getImgProps, getWrapperProps } = useImage(props)
    const img = <Component {...getImgProps.value} />

    if (props.removeWrapper) { return () => img }

    const zoomed = (
      <div class={slots.value.zoomedWrapper()}>{img}</div>
    )

    if (props.isBlurred) {
      // clone element to add isBlurred prop to the cloned image
      return (
        <div {...getWrapperProps.value}>
          {props.isZoomed ? zoomed : img}
        </div>
      )
    }

    if (props.isZoomed || !props.disableSkeleton || props.fallbackSrc) {
      return <div {...getWrapperProps.value}> {props.isZoomed ? zoomed : img}</div>
    }

    return () => img
  }
})

export { Image }
