function KidsWithMaxCandies(candies, extra) {
    let maxCandies = Math.max(...candies);
    let result = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extra >= maxCandies) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    console.log(result);
}

const candies = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const extra = 5;
KidsWithMaxCandies(candies, extra);
