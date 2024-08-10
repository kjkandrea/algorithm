class Node {
  next = null

  constructor(value) {
    this.value = value
  }
}

export default class LinkedList {
  size = 0

  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
    this.size += 1
  }

  getAt(index) {
    if (0 > index || index >= this.size) {
      return null
    }

    let current = this.head
    let count = 0
    while(count < index) {
      current = current.next
      count += 1
    }
    return current.value
  }

  removeAt(index) {
    if (0 > index || index >= this.size) {
      return null
    }

    let current = this.head
    if (index === 0) {
      this.head = current.next
      this.size -= 1
      return
    }

    let prev
    let count = 0
    while (count < index) {
      prev = current
      current = current.next
      count += 1
    }
    prev.next = current.next
    this.size -= 1
  }
}
