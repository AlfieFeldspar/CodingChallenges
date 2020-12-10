//compare one day to the next. If next day is higher, take profit

var maxProfit = function(prices) {
    let profit = 0;
    if (prices.length === 0) {
        console.log(0);
    }

    // Start at the second position and compare backwards
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]){
            profit+=(prices[i]-prices[i-1])
        }
    }
    console.log(profit)
};
maxProfit([7,6,4,3,1])

// maxProfit([7,1,5,3,6,4])

//buy @1, sell @5 = 4
//buy @3, sell @6 = 3
//total = 7