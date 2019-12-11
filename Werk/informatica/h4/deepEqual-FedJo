function deepEqual(a, b) {
  if (typeof a !== typeof b) {return false};
  if (a === null && b !== null || b === null && a !== null) {return false};
  if (typeof a === "object") {
    if (Object.keys(a).length !== Object.keys(b).length) {return false};
    let keynum = 0;
    while (keynum !== Object.keys(a).length && keynum !== Object.keys(b).length) {
      if (Object.keys(a)[keynum] !== Object.keys(b)[keynum]) {return false};
      if (a.Object.keys(a)[keynum] !== b.Object.keys(b)[keynum]) {return false};
      keynum++; 
    }
    
  };
  
  
  return true  
};
console.log(console.log("a"))
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
