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
  iterator(this) {
    
    for
    
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
