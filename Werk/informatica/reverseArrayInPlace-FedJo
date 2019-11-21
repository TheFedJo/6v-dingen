function reverseArray(A) {
  let B = [];
  while (A.length > 0){
    B.push(A[A.length - 1]);
    A.pop();
  }
  return B 
}

function reverseArrayInPlace(A) {
  let ol = A.length;
  let C = 0;
  while((A.length / 2) < ol) {
    A.push(A[ol - C - 1]);
    C++;
  }
  while(A.length > ol) {
  A.shift();
  }
  return A
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5, 6, 7];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [7, 6, 5, 4, 3, 2, 1]
