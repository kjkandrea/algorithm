import Heap from "../data-structure/Heap.js";

function heap_sort(array) {
  const heap = new Heap()
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
