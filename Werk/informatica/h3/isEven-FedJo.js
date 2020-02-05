console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(false));
// → ??
console.log(isEven(-548));
// → true

function isEven(n) {
   if (n === 0) {
     return true
   } else if (n === 1) {
     return false
   } else if (isNaN(n) === false && n > 0) {
     return isEven(n - 2)
   } else if (isNaN(n) === false && n < 0) {
     return isEven(-1 * n)
   } else {
     console.log(`isEven cannot handle this value: ${n}`);
     return undefined
   }
     
     
};
