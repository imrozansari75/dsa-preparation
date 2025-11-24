function Sort(nums) {
    for (i = 0; i <= nums.length; i++) {
        for (j = 0; j < nums.length - i; j++) {
            if (nums[j] > nums[j + 1]) {
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}

sort_arr = Sort([2, 4, 3, 5, 1, 6])
console.log(sort_arr)