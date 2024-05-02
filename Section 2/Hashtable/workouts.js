class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let buket = this.table[index];

    if (!buket) {
      this.table[index] = [[key, value]];
    } else {
      const item = buket.find((item) => item[0] === key);
      if (item) {
        item[1] = value;
      } else {
        buket.push([key, value]);
      }
    }
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const item = bucket.find((item) => item[0] === key);
      if (item) {
        return item[1];
      }
    }
    return undefined;
  }

  removed(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const item = bucket.find((item) => item[0] === key);
      if (item) {
        bucket.splice(bucket.indexOf(item), 1);
      }
    }
    return undefined;
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i,this.table[i]);
      }
    }
  }
}

const table = new hashTable(50);

table.set("name","Madhav");
table.set("age",45);
table.print()

// table.removed("age")
console.log("output",table.get("name"));
table.print()

