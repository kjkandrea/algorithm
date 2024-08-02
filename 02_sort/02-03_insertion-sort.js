function insertion_sort(array) {
  for (let i = 1; i < array.length; i++ ) {
    let j;
    const val = array[i]
    for (j = i; j > 0 && array[j - 1] > val; j-- ) { // 삽입할 위치 찾기
      array[j] = array[j - 1]
    }
    array[j] = val
  }

  return array
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = insertion_sort(unsorted_array)

console.log(sorted_array)
