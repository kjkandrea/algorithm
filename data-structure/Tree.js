class TreeNode {
  value = undefined
  children = []

  constructor(value) {
    this.value = value
  }

  addChild(node) {
    this.children.push(node)
  }
}

export default class Tree {
  root = undefined

  constructor(value) {
    this.root = new TreeNode(value)
  }

  add(value, parentValue) {
    const parentNode = this.find(parentValue)
    if (parentNode) {
      parentNode.addChild(new TreeNode(value))
      return
    }

    console.log('값 %d 에 대한 부모 노드가 존재하지 않습니다.', parentNode)
  }

  find(value) {
    return this.findNode(this.root, value)
  }

  findNode(node, value) {
    if (node.value === value) {
      return node
    }

    node.children.forEach(child => {
      const result = this.findNode(child, value)
      if (result) return result
    })

    return null
  }
}
