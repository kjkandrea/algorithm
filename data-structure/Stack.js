export default class Stack {
  items = []

  push(val) {
    this.items.push(val)
  }

  pop() {
    return this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }
}
