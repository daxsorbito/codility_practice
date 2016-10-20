function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  const len = A.length
  if (len % 2  === 1 ) {
    A = A.sort()
    let result = A[0]
    for(var i = 0; i < len; i++) {
      const isEqlPrev = A[i] === A[i-1]
      const isEqlNext = A[i] === A[i+1]
      if ((i+1) % 2 === 1 && ((isEqlPrev && !isEqlNext) || (!isEqlPrev && !isEqlNext))) {
        result = A[i]
        break;
      }
    }
    return result
  }
  return A[0]
}
