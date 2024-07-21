def selection_sort(array, n):
    for i in range(n - 1):
        min = i
        for j in range(i + 1, n):
            if array[min] > array[j]:
                min = j
        array[i], array[min] = array[min], array[i]
    return array


unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
sorted_array = selection_sort(unsorted_array, len(unsorted_array))

print(sorted_array)
