import type { VNode, RendererNode, RendererElement } from 'vue'

type VueNode = VNode<RendererNode, RendererElement, { [key: string]: any }>

const isSymbol = (value: any): value is symbol => typeof value === 'symbol'

export const pickChildren = (children: VueNode[] | undefined, targetNode: any) => {
  if (!children) { return [[], undefined] }
  if (children.length === 1) {
    const [child] = children
    if (isSymbol(child.type)) {
      children = child.children as any
    }
  }

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
