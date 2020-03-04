class Group {
  constructor() {
    let storage = [];
    this.storage = storage;
  }
  add(value) {
    let storage = this.storage
    if (storage.indexOf(value) === -1) {storage.push(value)}
    this.storage = storage
  }
  delete(value) {
    let storage = this.storage
    if (storage.indexOf(value) !== -1) {storage.splice(storage.indexOf(value), 1)}
    this.storage = storage     
  }
  has(value) {
    let storage = this.storage
    for (let element of storage) {
      if (element === value) {return true}
       
    }
    return false
  }
  static from(itobject) {
    let GROUP = new Group()
    for (let element of itobject) {
      GROUP.add(element)
    }
    return GROUP    
  }
}

let group = Group.from([10, 20]);
console.log(group)
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
console.log(group)
