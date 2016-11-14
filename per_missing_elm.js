function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  let sumValues = 0;
  let indexValues = 0;
  for(let x = 0; x < A.length; x++){
    indexValues += (x+1);
    sumValues += A[x]
  }
  return Math.abs(sumValues - (indexValues + (A.length +1)))
}
