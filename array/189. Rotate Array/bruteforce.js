// Given array and rotation count
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let n = arr.length;
let temp = [];

// 1️⃣ Handle case where k > n
// (e.g., if k = 10 and n = 7 → rotating by 10 is same as rotating by 3)
k = k % n;

// 2️⃣ Store the last 'k' elements in a temporary array
//    These are the elements that will come to the front after rotation.
for (let i = n - k; i < n; i++) {
  temp.push(arr[i]);
}
// After this loop → temp = [5, 6, 7]

// 3️⃣ Shift the remaining (first n-k) elements 'k' steps to the right
//    We go backward to avoid overwriting elements we still need to move.
for (let i = n - k - 1; i >= 0; i--) {
  arr[i + k] = arr[i];
}
// Example: moves 4 → position 6, 3 → 5, 2 → 4, 1 → 3

// 4️⃣ Copy the 'temp' elements back into the first 'k' positions
//    This places [5, 6, 7] at the beginning of the array.
for (let i = 0; i < k; i++) {
  arr[i] = temp[i];
}

// ✅ Final rotated array
console.log(arr);   // Output: [5, 6, 7, 1, 2, 3, 4]
