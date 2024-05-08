class HashTable {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.capacity = capacity;
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    index %= this.capacity;
    return this.linearProbing(index); //call linear or quadratic probing method
  }

  linearProbing(index) {
    const ind = index;
    let i = 0;
    while (index < this.capacity) {
      index = ind + i;
      if (this.array[index] === undefined) return index;
      i += 1;
    }
    return -1;
  }

  quadraticProbing(index) {
    const start = index;
    let i = 0;
    while (index < this.capacity) {
      index = start + i;
      if (this.array[index] === undefined) return index;
      i *= i;
    }
    return -1;
  }

  set(key, value) {
    const index = this.hash(key);

    if (index === -1) return console.log("failed to hash");
    this.array[index] = [key, value];
  }

  get(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    index %= this.capacity;
    //get method for quadratic probing:
    let start = index,
      i = 0;
    while (start < this.capacity) {
      index += i * i;
      if (this.array[index][0] === key) break;
      start++;
      i++;
    }
    return console.log(this.array[index][1]);
  }

  print() {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i]) {
        console.log(i, this.array[i]);
      }
    }
  }
}

const table = new HashTable(5);
table.set("TN", "Tamil Nadu");
table.set("NT", "Delhi NCT");
table.set("NT", "Delhi NCT");
table.set("NT", "Delhi NCT");
table.set("NT", "Delhi NCT");
table.set("NT", "Delhi NCT");
table.set("NT", "Delhi NCT");
table.set("NT", "Delhi NCT");
table.set("NT", "Delhi NCT");
table.set("NT", "Delhi NCT");
table.set("NT", "Delhi NCT");

// table.get("NT");
console.log(table.array);
// table.print();
