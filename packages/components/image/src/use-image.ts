import type { HTMLEchoUIProps } from '@echoui/system'
import { image, type ImageVariantProps } from '@nextui-org/theme'
import { clsx, dataAttr } from '@echoui/shared-utils'
import { computed, useAttrs, type ComputedRef } from 'vue'
import { useImage as useVueImage } from '@vueuse/core'

interface Props extends HTMLEchoUIProps<'img'> {
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  src?: string,
  isLoading?: boolean
  isBlurred?: boolean
  disableSkeleton?: boolean
  fallbackSrc?: string
  loading?: 'eager' | 'lazy'
  width?: number
  height?: number
  alt?: string
  sizes?: string
}

export type UseImageProps = Props & ImageVariantProps

export const useImage = (props: UseImageProps) => {
  const attrs = useAttrs()
  const { isLoading: loading, error } = useVueImage({ src: props.src ?? attrs.src as string })
  const isImgLoaded = computed(() => !error.value && !loading.value)
  const isLoading = computed(() => loading.value || props.isLoading)
  const showFallback = computed(() => (!props.src || !isImgLoaded.value) && !!props.fallbackSrc)
  const showSkeleton = computed(() => isLoading.value && !props.disableSkeleton)
  const w = computed(() => props.width ? typeof props.width === 'number' ? `${props.width}px` : props.width : 'fit-content')

  const Component = props.as || 'img'

  const slots = computed(() => image({ ...props, showSkeleton: showSkeleton.value }))

  const getImgProps = computed(() => {
    const imgStyles = clsx(attrs.class as string)
    return {
      src: props.src,
      width: props.width,
      height: props.height,
      sizes: props.sizes,
      'data-loaded': dataAttr(true),
      class: slots.value.img({ class: imgStyles }),
      loading: props.loading
    }
  })

  const getWrapperProps = computed(() => {
    const fallbackStyle = showFallback.value ? { backgroundImage: `url(${props.fallbackSrc})` } : {}
    return {
      class: slots.value.wrapper(),
      style: {
        ...fallbackStyle,
        maxWidth: w.value
      }
    }
  })

  return { Component, slots: slots as ComputedRef<Record<string, any>>, getImgProps, getWrapperProps }
}
