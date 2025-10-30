var reverseString = function (s) {
    n = s.length - 1

    function reverse(start, end) {
        while (start < end) {
            let temp = s[start];
            s[start] = s[end];
            s[end] = temp
            start++;
            end--;
        }
    }
    reverse(0, n)
};

let arr = ["I", "m", "r", "o", "z"];
reverseString(arr);
console.log(arr); 