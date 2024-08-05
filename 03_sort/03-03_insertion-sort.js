function insertionSort(array) {
  for (let i = 1; i < array.length; i++ ) {
    let j;
    const val = array[i]
    // i 의 위치로 부터 앞에 위치들을 검사
    for (
      j = i;
      j > 0
      // 만일 특정 값이 val 보다 크다면
      && array[j - 1] > val;
      j--
    ) {
      // 해당 위치에 val 저장
      array[j] = array[j - 1]
    }

    array[j] = val
  }

  return array
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = insertionSort(unsorted_array)

console.log(sorted_array)
