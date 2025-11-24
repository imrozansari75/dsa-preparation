var removeDuplicates = function (nums) {
    n = nums.length;
    i = 0;
    for (j = 1; j < n; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1
};

nums = [0, 1, 1, 2, 3, 4, 4, 5, 6]
result = removeDuplicates(nums)
unique = nums.slice(0,result)
console.log(unique);
