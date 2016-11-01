function solution(A) {
  let min = Number.MAX_VALUE;
  let sumRight = 0
  let sumLeft = 0

  sumRight = A.reduce((prevVal, curVal) => prevVal + curVal)

  for(let i = 0; i < A.length -1; i++) {
    sumRight -= A[i]
    sumLeft += A[i]

    const splitValue = Math.abs(sumLeft - sumRight)

    if (min > splitValue) {
      min = splitValue
    }
  }
  return min
}
