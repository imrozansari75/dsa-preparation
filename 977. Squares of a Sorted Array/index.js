nums = [-4,0,3,6,2,1]
n = nums.length
sq = []
for(i=0; i<n; i++){
    sq.push(nums[i]**2)
}
sq.sort((a,b) => a -b )

console.log(sq)


/*
Shorter Code
const nums = [4, 3, 6, 2, 1];
const sq = nums.map(n => n ** 2).sort((a, b) => a - b);
console.log(sq); // [1, 4, 9, 16, 36]
*/