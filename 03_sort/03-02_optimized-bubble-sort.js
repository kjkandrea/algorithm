function optimizedBubbleSort(array) {
  let operation_count = 1;

  // 두 쌍을 n^2 번 비교
  for (let i = 0; i < array.length - 1; i += 1 ) {
    let swapped = false

    for (let j = 0; j < array.length - 1 - i; j += 1 ) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        swapped = true
      }

      operation_count += 1;
    }

    // 최적화. 바리 바꿈이 일어나지 않았으면 종료
    if (!swapped) break
  }

  console.log('optimized_bubble_sort operation count: ', operation_count)

  return array;
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
console.log(optimizedBubbleSort(unsorted_array))
