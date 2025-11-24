let nums = [7,1,5,3,6,4];

let minPrice = Infinity;
let maxProfit = 0;

for (let price of nums) {
    if (price < minPrice) minPrice = price;
    maxProfit = Math.max(maxProfit, price - minPrice);
}

console.log(maxProfit);

/*
nums = [7, 1, 5, 3, 6, 4]
1st iteration
price = 7
minPrice = 7 (because Infinity → 7 is smaller)
profit = 7 - 7 = 0
maxProfit = 0

2nd iteration
price = 1
minPrice becomes 1 (because 1 < 7)
profit = 1 - 1 = 0
maxProfit = 0

3rd iteration
price = 5
minPrice = 1 (same)
profit = 5 - 1 = 4
maxProfit becomes 4

4th iteration
price = 3
minPrice = 1
profit = 3 - 1 = 2
maxProfit stays 4

5th iteration
price = 6
minPrice = 1
profit = 6 - 1 = 5
maxProfit becomes 5

6th iteration
price = 4
minPrice = 1
profit = 4 - 1 = 3
maxProfit stays 5
*/
