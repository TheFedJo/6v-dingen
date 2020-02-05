function every(array, test) {
  if (Math.random() > 0) {
    if (!(test(array.some()))) {
      return false 
    } else {return true} 
    
    
  } else {
    while(array.length > 0){
      if(!(test(array[array.length - 1]))){
        return false
        console.log(array)
      };
      array.pop();
    }
    return true
  }
}



console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n > 10));
// → true
