function longestSubstring(str, k){
    let letterMap = {};
    let maxLength = 0;
    let windowStart = 0;

    for(let windowEnd  = 0; windowEnd < str.length; windowEnd++){
        let rightChar = str[windowEnd];
        //If Char is not already in HashMap, add it
        if(!(rightChar in letterMap)){
            letterMap[rightChar] = 1;
        }
        letterMap[rightChar] += 1;

        

    }
} 