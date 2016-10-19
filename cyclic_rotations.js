function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    if (A && A.length) {
        for(var i = 0; i < K; i++){
            A.unshift(A.pop())
        }
    }
    return A
}

