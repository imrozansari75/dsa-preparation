nums = [1, 2, 3, 4, 5]
k = 3
n = nums.length
counter = 0

for (i = 0; i < n; i++) {
    temp = []
    sum = 0
    for (j = i; j < n; j++) {
        sum += nums[j]
        if (sum === k) {
            counter++;
        }
    }
}

console.log(counter)