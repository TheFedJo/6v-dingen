let count = 0;
function countChar(a, b) {
  for (let size = 0; size < a.length; size ++) {
    if (a[size] == b) {
      count += 1 
    } else {
      count += 0
    }
  }
  return count;
}
