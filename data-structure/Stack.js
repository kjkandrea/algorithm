export default class Stack {
  array = []

  push(val) {
    this.array.push(val)
  }

  pop() {
    return this.array.pop()
  }

  isEmpty() {
    return this.array.length !== 0
  }
}
