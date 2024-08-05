import MaxHeap from "../data-structure/MaxHeap.js";

// 제자리 정렬 알고리즘에 부합하지 않으나, 가독성을 위해 class 로 구현
// 힙 정렬은 제자리 정렬 알고리즘을 통해 구현할 수 있다.
function heap_sort(array) {
  const heap = new MaxHeap()
  const sorted_array = []

  array.forEach(item => heap.insert(item))

  let cur = heap.extractMax()
  while (cur !== null) {
    sorted_array.push(cur)
    cur = heap.extractMax()
  }

  return sorted_array
}

const unsorted_array = [60, 20, 70, 10, 80, 30, 50, 40]
const sorted_array = heap_sort(unsorted_array)

console.log(sorted_array)
