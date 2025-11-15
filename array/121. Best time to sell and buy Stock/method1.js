let nums = [7,1,5,3,6,4];
let maxProfit = 0;
let n = nums.length;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        let profit = nums[j] - nums[i];
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
}

console.log(maxProfit); // 5
