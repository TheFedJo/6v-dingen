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
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.pos = 0;
    this.group = group;
  }

  next() {
    if(this.pos === this.group.storage.length) {
      return {done: true};
    } else {
      let result = {value: this.group.storage[this.pos],
                    done: false};
      this.pos++;
      return result;     
    }
  }
};


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
