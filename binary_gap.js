// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    const allBin = N.toString(2)
    const zeroRegEx = /(?:0+[1])/g
    let maxLen = 0
    while(match = zeroRegEx.exec(allBin)){
        const len = match[0].length - 1
        if (len > maxLen) {
            maxLen = len
        }
    }

    return maxLen
}
