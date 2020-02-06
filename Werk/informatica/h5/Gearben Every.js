function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false
  }
  return true
}

function Every(array, test) {
  if (!array.some(a => !test(a))) {return true}
  if (array.length = 0) {return true}
  else {return false}
}
