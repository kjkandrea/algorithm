function merge_sort(array, start = 0, end = array.length -1) {
  if (start >= end) {
    return [array[start]];
  }
  const mid = Math.floor((start + end) / 2)
  const left = merge_sort(array, start, mid)
  const right = merge_sort(array, mid + 1, end)

  return merge(left, right)
}

function merge(left, right) {
  const sorted_array = []
  let leftIndex = 0
  let rightIndex = 0

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sorted_array.push(left[leftIndex])
      leftIndex += 1
    } else {
      sorted_array.push(right[rightIndex])
      rightIndex += 1
    }
  }

  while (leftIndex < left.length) {
    sorted_array.push(left[leftIndex]);
    leftIndex += 1
  }

  while (rightIndex < right.length) {
    sorted_array.push(right[rightIndex]);
    rightIndex += 1
  }

  return sorted_array
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = merge_sort(unsorted_array)

console.log(sorted_array)
