function quickSort(
  array,
  // 시작 피벗은 0 번째
  start = 0,
  end = array.length - 1
) {
  if (start >= end) return array;

  const pivot = partition(array, start, end);

  // 왼쪽, 오른쪽 부분배열에 대한 퀵 정렬의 순환 호출
  quickSort(array, start, pivot - 1)
  quickSort(array, pivot + 1, end)

  return array;
}

function partition(array, start, end) {
  const pivot = array[start]
  let left = start + 1
  let right = end

  // 왼쪽에 작은 값, 오른쪽에 큰 값 배치
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
const sorted_array = quickSort(unsorted_array)

console.log(sorted_array)
