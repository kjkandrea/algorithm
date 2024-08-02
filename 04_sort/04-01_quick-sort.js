function quick_sort(array) {
  if (1 >= array.length) return array;

  const pivot = partition(array);
  console.log("pivot : %d", pivot)
  console.log("pivot value : %d", array[pivot])
  console.log(array)
}

function partition(array) {
  const n = array.length

  let left = 1
  let right = n - 1

  while (left < right) {
    while (left < n && array[left] < array[0]) {
      left += 1
    }
    while (right > 0 && array[right] >= array[0]) {
      right -= 1
    }

    if (left < right) {
      const temp = array[left]
      array[left] = array[right]
      array[right] = temp
    } else {
      const temp = array[0]
      array[0] = array[right]
      array[right] = temp
    }
  }

  return right;
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = quick_sort(unsorted_array)

console.log(sorted_array)
