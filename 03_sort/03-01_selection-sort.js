function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i += 1 ) {
    let min = i;

    // 최소값을 찾는다.
    for (let j = i + 1; j < array.length; j += 1 ) {
      if (array[min] > array[j]) {
        min = j
      }
    }

    // 최소값을 앞에 위치시킴
    [array[i], array[min]] = [array[min], array[i]]
  }

  return array
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = selectionSort(unsorted_array)

console.log(sorted_array)
