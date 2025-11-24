function twoSum(arr, target) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j]
        if (sum === target) {
            return [i, j];
        }
        }
    }
}

sum = twoSum([1, 2, 3, 4, 5, 6], 10)
console.log(sum)