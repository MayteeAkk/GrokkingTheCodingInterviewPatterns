function maxSum(K, arr){
    let windowStart = 0;
    let windowSum = 0;
    let maxSum = 0;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd];
        if(windowEnd >= K - 1){
            maxSum = Math.max(windowSum, maxSum);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return maxSum;
}

let testArray = [2, 1, 5, 1, 3, 2];
console.log(maxSum(3, testArray))