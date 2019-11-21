function reverseArray(a) {
   let C = []
   let count = a.length;
   while (count >= 0) {
     count --;
    C.push(a[count]);
   }
  C.pop()
  return C;
}

function reverseArrayInPlace(A) {
  let size = A.length -1;
  let count = size
  while(count >= 0) {
    A.push(A[count]);
    count --;
  }  
  let B = A.length / 2;
  let countB = 1;
  while (countB <= B) {
    countB ++;
    A.shift()
  }
  return A
} 
