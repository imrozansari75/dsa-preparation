nums = [-1, 0, 3, 5, 9, 12]
target = 9
n = nums.length
left = 0
right = n - 1

function binarySearch(nums, target) {
    while (left < right) {
        mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid
        }
        else if (nums[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1
}

result = binarySearch(nums, target)
console.log(result)