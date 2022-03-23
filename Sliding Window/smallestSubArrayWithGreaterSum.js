function smallestSubarray(S, arr){
    let minLength = Infinity;
    let windowStart = 0;
    let windowSum = 0;

    
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd];
        //While the window is greater than S, then the window keeps sliding
        while(windowSum >= S){
            //Here we subtract windowStart from windowEnd to find the length, but also add 1, to compensate for array indexing
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    //If there are no possible combinatios
    if(minLength == Infinity){
        return 0;
    }
    return minLength;
}

console.log(`Smallest subarray length: ` + smallestSubarray(7, [2, 1, 5, 2, 3, 2]));
