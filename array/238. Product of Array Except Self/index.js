let nums = [1, 2, 3, 4];
let n = nums.length;
let result = [];

let left = 1;
for (let i = 0; i < n; i++) {
    result[i] = left;
    left *= nums[i];
}

// 🔧 multiply, not replace
let right = 1;
for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
}

console.log(result);
