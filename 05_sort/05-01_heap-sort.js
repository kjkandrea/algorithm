import Heap from "../data-structure/Heap.js";

function heap_sort(array) {
  const heap = new Heap()

  array.forEach(item => heap.insert(item))
  return heap.heap
}

const unsorted_array = [60, 20, 70, 10, 80, 30, 50, 40]
const sorted_array = heap_sort(unsorted_array)

console.log(sorted_array)
