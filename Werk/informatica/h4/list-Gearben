function arrayToList(a) {
  let aList = null;
  while (a.length > 0) {
    aList = {value: a[a.length - 1], rest: aList}
    a.pop()
  }
  return aList
}

function listToArray(b) {
  let C = []
  for (let node = b; node; node = node.rest) {
  	C.push (node.value)
  }
  return C;
}

function prepend(a, b) {
  let cList = {value: a, rest: b}
  return cList;
}

function nth(list, count) {
  let C = []
  for (let node = list; node; node = node.rest) {
  	C.push (node.value)
  }
  return C[count]
}

// RECURSIVE NTH

function nth(a, b) {
  let count = b
  while (count !== 1) {
    return nth(a.rest, b - 1)
  }
  return a.value
}
