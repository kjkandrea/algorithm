function bubble_sort(array) {
  for (let i = 0; i < array.length - 1; i += 1 ) {
    for (let j = 0; j < array.length - 1; j += 1 ) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array;
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = bubble_sort(unsorted_array)

console.log(sorted_array)
