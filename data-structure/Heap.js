export default class Heap {
  heap = []

  insert(value) {
    this.heap.push(value)
    this.heapifyUp()
  }

  heapifyUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      if (this.heap[index] > this.heap[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }
}
