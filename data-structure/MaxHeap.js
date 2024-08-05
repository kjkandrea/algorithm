export default class MaxHeap {
  heap = []

  insert(value) {
    this.heap.push(value)
    this._heapifyUp()
  }

  extractMax() {
    if (this.heap.length === 0) return null

    if (this.heap.length === 1) return this.heap.pop()

    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._heapifyDown()
    return max
  }

  _heapifyUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      const parentIndex = this._getParentIndex(index)
      if (this.heap[index] > this.heap[parentIndex]) {
        this._swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  _heapifyDown() {
    let currentIndex = 0
    const len = this.heap.length

    while(true) {
      const leftChildIndex = this._getLeftChildIndex(currentIndex)
      const rightChildIndex = this._getRightChildIndex(currentIndex)
      let largestChildIndex = currentIndex

      if (
        // 왼쪽 자식 노드가 존재한다. 배열 범위를 넘어간다면 존재하지 않는 것
        len > leftChildIndex
        // 현재 노드보다 크다면
        && this.heap[leftChildIndex] > this.heap[largestChildIndex]
      ) {
        largestChildIndex = leftChildIndex
      }

      if (
        len > rightChildIndex
        && this.heap[rightChildIndex] > this.heap[largestChildIndex]
      ) {
        largestChildIndex = rightChildIndex
      }

      // 더 큰 자식 노드가 있다면
      if (largestChildIndex !== currentIndex) {
        this._swap(currentIndex, largestChildIndex)
        currentIndex = largestChildIndex
      } else {
        break;
      }
    }
  }

  _getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  _getLeftChildIndex(index) {
    return 2 * index + 1
  }

  _getRightChildIndex(index) {
    return 2 * index + 2
  }

  _swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }
}
