class hashtable {
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
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const item = bucket.find((item) => item[0] === key);
      if (item) {
        item[i] = value;
      } else {
        bucket.push([key, value]);
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

  remove(key) {
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
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new hashtable(50);

table.set("name", "Madhav");
table.set("age", 22);
table.print()
console.log(table.get("name"));
console.log(table.get("age"));

table.remove("age")
table.print()
