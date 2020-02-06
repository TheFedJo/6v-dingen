function dominantDirection(text) {
  let nltr = 0;
  let nrtl = 0;
  let nttb = 0;
  for (let element of text) {
    if (!(
      characterScript(element.codePointAt()) === null 
      || characterScript(element.codePointAt()) === undefined
    )){
      if (characterScript(element.codePointAt()).direction === "ltr") {
        nltr++;        
      } else if (characterScript(element.codePointAt()).direction === "rtl") {
        nrtl++;        
      } else {nttb++;}
    }
  }
  if (nltr > nttb && nltr > nrtl) {
    return "ltr"
  } else if (nttb > nrtl) {
    return "ttb"
  } else {return "rtl"} 
}

console.log(dominantDirection("HALLO"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
