nums = [1, 2, 3, 4]
// goal = [24,12,8,6]
result = []

for (i = 0; i < nums.length; i++) {
    product = 1
    for (j = 0; j < nums.length; j++) {
        if (i != j) {
            product *= nums[j]
        }
    }
    result.push(product)
}
console.log(result)