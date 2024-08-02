function quick_sort(array, start = 0, end = array.length - 1) {
  if (start >= end) return array;

  const pivot = partition(array, start, end);
  quick_sort(array, start, pivot - 1)
  quick_sort(array, pivot + 1, end)

  return array;
}

function partition(array, start, end) {
  const pivot = array[start]
  let left = start + 1
  let right = end

  while (left < right) {
    while (left < end && array[left] < pivot) {
      left += 1
    }
    while (right > start && array[right] >= pivot) {
      right -= 1
    }

    if (left < right) {
      [array[left], array[right]] = [array[right], array[left]]
    } else {
      [array[start], array[right]] = [array[right], array[start]]
    }
  }

  return right;
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = quick_sort(unsorted_array)

console.log(sorted_array)
