import type { VNode, RendererNode, RendererElement } from 'vue'
import { Fragment } from 'vue'

type VueNode = VNode<RendererNode, RendererElement, { [key: string]: any }>

const isFragment = (value: any): value is symbol => value === Fragment

const flatSlots = (slots: VueNode[] | undefined): VueNode[] => {
  if (!slots) { return [] }
  if (!slots.length) { return [] }

  const s: VueNode[] = []

  for (const slot of slots) {
    if (!isFragment(slot.type)) {
      s.push(slot)
      continue
    }

    if (Array.isArray(slot.children)) {
      slot.children.forEach((i) => {
        if (i) {
          s.push(i as VueNode)
        }
      })
    }
  }

  return s
}

export const pickChildren = (children: VueNode[] | undefined, targetNode: any) => {
  children = flatSlots(children)
  if (!children.length) { return [[], undefined] }

  const target: VueNode[] = []
  const withoutTargetChildren = children.map((child: any) => {
    if (child.type.name === targetNode.name) {
      target.push(child)
      return null
    }
    return child
  }).filter(Boolean)

  const targetChildren = target.length >= 0 ? target : undefined

  return [withoutTargetChildren, targetChildren]
}
