function bubble_sort(array) {
  let operation_count = 1;

  for (let i = 0; i < array.length - 1; i += 1 ) {
    for (let j = 0; j < array.length - 1; j += 1 ) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }

      operation_count += 1;
    }
  }
  console.log('bubble_sort operation count: ', operation_count)

  return array;
}

function optimized_bubble_sort(array) {
  let operation_count = 1;

  for (let i = 0; i < array.length - 1; i += 1 ) {
    let swapped = false

    for (let j = 0; j < array.length - 1 - i; j += 1 ) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        swapped = true
      }

      operation_count += 1;
    }

    if (!swapped) break
  }

  console.log('optimized_bubble_sort operation count: ', operation_count)

  return array;
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]

console.log(bubble_sort(unsorted_array))
console.log(optimized_bubble_sort(unsorted_array))
