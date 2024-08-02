function quick_sort(array, start = 1, end = array.length) {
  if (1 >= array.length) return array;

  const pivot = partition(array, start, end);
  console.log("pivot : %d", pivot)
  console.log("pivot value : %d", array[pivot])
  console.log(array)
}

function partition(array, start, end) {
  let left = start
  let right = end - 1

  while (left < right) {
    while (left < end && array[left] < array[0]) {
      left += 1
    }
    while (right > start && array[right] >= array[0]) {
      right -= 1
    }

    if (left < right) {
      [array[left], array[right]] = [array[right], array[left]]
    } else {
      [array[0], array[right]] = [array[right], array[0]]
    }
  }

  return right;
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = quick_sort(unsorted_array)

console.log(sorted_array)
