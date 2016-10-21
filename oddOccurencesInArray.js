function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  A = A.sort()
  const len = A.length
  let result = A[0]

  for(var i = 0; i < len; i+=2) {
    const isEqlPrev = A[i] === A[i-1]
    const isEqlNext = A[i] === A[i+1]
    if ((isEqlPrev && !isEqlNext) || (!isEqlPrev && !isEqlNext)) {
      result = A[i]
      break;
    }
  }
  return result
}
