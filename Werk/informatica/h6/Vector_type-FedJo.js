class Vec {
 constructor(x, y) {
   this.x = x
   this.y = y
 }
  
 plus(vec2) {
    return new Vec(this.x + vec2.x, this.y + vec2.y)  
 }
 
 minus(vec2) {
   return new Vec(this.x - vec2.x, this.y - vec2.y)
 }
  
 get length() {
   let lengte = Math.sqrt(this.x * this.x + this.y * this.y);
   return lengte
 }
};

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
