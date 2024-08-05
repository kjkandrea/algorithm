function shellSort(array) {
  for (
    // gap 이 1 미만이 될 때까지 수행
    let gap = Math.floor(array.length / 2);
    gap >= 1 ;
    gap = Math.floor(gap / 2)
  ) {
    // 삽입 정렬
    for (let i = gap; i < array.length; i++ ) {
      const val = array[i]
      let j;
      for (j = i; j >= gap && array[j - gap] > val; j = j - gap ) {
        array[j] = array[j - gap]
      }
      array[j] = val
    }
  }

  return array
}

const unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
const sorted_array = shellSort(unsorted_array)

console.log(sorted_array)
