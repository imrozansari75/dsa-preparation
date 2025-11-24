let nums = [1, 0, -1, -5, 8, 4, -2];
let target = 6;

nums.sort((a, b) => a - b);
let result = [];
let n = nums.length;

for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
}

console.log(result);
