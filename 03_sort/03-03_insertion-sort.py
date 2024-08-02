def insertion_sort(array):
    for i in range(1, len(array) ):
        val = array[i]
        for j in range(i, 0, -1):
            if array[j - 1] > val:
                array[j - 1], array[j] = array[j], array[j - 1]

    return array


unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
sorted_array = insertion_sort(unsorted_array)

print(sorted_array)
