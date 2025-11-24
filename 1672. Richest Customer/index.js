function RichCustomer(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        if (sum > maxWealth) {
            maxWealth = sum;
        }
    }

    console.log(maxWealth);
}

RichCustomer([[1, 2, 3], [3, 2, 4]]); // Output: 9
