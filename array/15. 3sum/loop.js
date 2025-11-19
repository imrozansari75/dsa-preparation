nums = [1,0,-1,-5,8,4,-2]
target = 6
n=nums.length
nums.sort((a,b) => a-b)
result = []

for(i=0;i<n;i++){
    for(j=i;j<n;j++){
        for(k=j;k<n;k++){
            sum = nums[i] + nums[j] + nums[k]
            if(sum===target){
                result.push([nums[i], nums[j], nums[k]])
            }
        }
    }    
}

console.log(result)