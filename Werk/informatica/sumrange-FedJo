console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

function range(term1, lastterm, increment = 1) {
  let range1 = [];
  let count = term1;
  while (range1[range1.length - 1] !== lastterm) {
    range1.push(count);
    count += increment;
  };
  return range1;
};

function sum(arrayA) {
  let sumA = 0;
  let count = 0;
  while (arrayA.length !== 0 && count !== 1000) {
    sumA += arrayA[arrayA.length - 1];
    count++;
    arrayA.pop();
  };
  return sumA;
};
