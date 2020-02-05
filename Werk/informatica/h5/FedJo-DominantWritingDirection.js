function dominantDirection(text) {
  for (let element of text) {
    if (characterScript(element).direction === "ltr") {console.log("ltr");}
    
  }
  
  
  
  
  
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
