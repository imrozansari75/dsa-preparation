let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let n = arr.length;

k = k % n; // handles cases like k > n

// Step 1: store last k elements in temp array
let temp = [];
for (let i = n - k; i < n; i++) {
    temp.push(arr[i]);
}
// temp = [5,6,7]

// Step 2: shift remaining elements to the right
for (let i = n - 1; i >= k; i--) {
    arr[i] = arr[i - k];
}

// Step 3: copy temp back to the start
for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
}

console.log(arr); // [5,6,7,1,2,3,4]
