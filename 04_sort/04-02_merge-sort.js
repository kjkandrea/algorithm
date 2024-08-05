function mergeSort(array, start = 0, end = array.length -1) {
  if (start >= end) {
    return [array[start]];
  }
  const mid = Math.floor((start + end) / 2)

  // 절반을 나누어 각 부분 배열에 순환적으로 합병 정렬을 시킴
  const left = mergeSort(array, start, mid)
  const right = mergeSort(array, mid + 1, end)

  // 정렬된 두 부분 배열을 합침
  return merge(left, right)
}

function merge(left, right) {
  const sorted_array = []
  let leftIndex = 0
  let rightIndex = 0

  // 작은 데이터를 왼 쪽에, 큰 데이터를 오른 쪽에 배치
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
const sorted_array = mergeSort(unsorted_array)

console.log(sorted_array)
