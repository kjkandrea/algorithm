function binarySearch(sortedArray, findKey, left = 0, right = sortedArray.length - 1) {
  if (left > right) return -1

  const mid = Math.floor((left + right) / 2)
  if (sortedArray[mid] === findKey) return mid

  return sortedArray[mid] > findKey
    ? binarySearch(sortedArray, findKey, left, mid - 1)
    : binarySearch(sortedArray, findKey, mid + 1, right)
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7]
console.log(binarySearch(sortedArray, 5))
