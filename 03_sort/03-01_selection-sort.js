function selection_sort(array) {
  for (let i = 0; i < array.length - 1; i += 1 ) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 1 ) {
      if (array[min] > array[j]) {
        min = j
      }
    }
    let temp = array[i]
    array[i] = array[min]
    array[min] = temp
  }

  return array
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = selection_sort(unsorted_array)

console.log(sorted_array)
