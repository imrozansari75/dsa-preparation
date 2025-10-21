let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let n = arr.length;

k = k % n; // handle cases where k > n

// helper function to reverse part of array
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Step 1: reverse whole array
reverse(arr, 0, n - 1);

// Step 2: reverse first k elements
reverse(arr, 0, k - 1);

// Step 3: reverse remaining n-k elements
reverse(arr, k, n - 1);

console.log(arr); // [5, 6, 7, 1, 2, 3, 4]


