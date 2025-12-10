var filter = function(arr, fn) {
    let fil = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            fil.push(arr[i]);
        }
    }
    return fil;
};

const result = filter([2, 15, 8, 22, 5], (n) => n > 10);
console.log(result); 
