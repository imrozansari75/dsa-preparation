nums = [1, 2, 3, 4]
r = 3
n = nums.length
result = []

for (i = 0; i < n; i++) {
    temp = [];
    for (j = i; j < n; j++) {
        temp.push(nums[j])
        result.push([...temp])
    }
}

counter = 0
for (k = 0; k < result.length; k++) {
    sum = 0
    for (num of result[k])
        sum += num
    if (sum === r) {
        counter++
    }
}

console.log(counter)