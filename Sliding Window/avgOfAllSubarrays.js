function findAverage(K, arr){
    let windowSum = 0;
    let windowStart = 0;
    let returnArray = [];

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        //Add to the window sum until index hits K - 1
        windowSum += arr[windowEnd];
        //When you hit K - 1, accounting for array start at 0
        if(windowEnd >=  K - 1){
            //Find the average of the current windowSum and add to array
            returnArray.push(windowSum / K);
            //Then subtract the first element in the window that is leaving
            windowSum -= arr[windowStart];
            //Iterate windowStart for the new first element
            windowStart++;
        }
    }

    return returnArray;
}

let testArray = [1, 3, 2, 6, -1, 4, 1, 8, 2]

console.log(findAverage(5, testArray));