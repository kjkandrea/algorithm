def bubble_sort(array):
    for i in range(len(array) - 1):
        for j in range(len(array) - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
    return array


unsorted_array = [30, 20, 40, 35, 5, 10, 45, 50, 25, 15]
sorted_array = bubble_sort(unsorted_array)

print(sorted_array)
