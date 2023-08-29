import type { VNode, RendererNode, RendererElement } from 'vue'

type VueNode = VNode<RendererNode, RendererElement, { [key: string]: any }>

export const pickChildren = (children: VueNode[] | undefined, targetNode: any) => {
  if (!children || !children.length) { return [[], undefined] }
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
