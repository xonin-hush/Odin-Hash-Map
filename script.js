class LinkedList {
  constructor(head) {
    this.head = head;
    this.next = null;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class Hashmap {
  constructor() {
    this.buckets = [];
    this.buckets.length = 16;
    this.loadFactor = 0.75;
    this.product = this.bucketSize * this.loadFactor;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length;
    }
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key);
    this.checkSize();
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      let node = new Node(key, value);

      if (this.buckets[index] == undefined) {
        this.buckets[index] = new LinkedList(node);
      } else {
        if (
          this.buckets[index].head.value == node.value &&
          this.buckets[index].head.key == node.key
        ) {
          return;
        } else {
          if (
            this.buckets[index].head.key == node.key &&
            this.buckets[index].head.value != node.value
          ) {
            this.buckets[index].head = node;
          }

          if (this.buckets[index].head.key != node.key) {
            this.buckets[index].head.next = node;
          }
        }
      }
    }
  }

  checkSize() {
    let counter = 0;
    for (let item in this.buckets) {
      counter++;
    }
    if (this.buckets.length * this.loadFactor < counter) {
      this.buckets.length = this.buckets.length * 2;
      console.log("buckets doubled");
    }
  }

  get(key) {
    let temp = "";
    for (let i in this.buckets) {
      temp = this.buckets[i].head;
      if (temp.key == key) {
        console.log(temp.value);
        return;
      } else {
        while (temp.next != null) {
          temp = temp.next;
          if (temp.key == key) {
            console.log(temp.value);
            return;
          }
        }
      }
    }
    console.log("null");
  }

  has(key) {
    let temp = "";
    for (let i in this.buckets) {
      temp = this.buckets[i].head;
      if (temp.key == key) {
        console.log("True");
        return;
      } else {
        while (temp.next != null) {
          temp = temp.next;
          if (temp.key == key) {
            console.log("True");
            return;
          }
        }
      }
    }
    console.log("False");
  }

  remove(key) {
    let temp = "";
    for (let i in this.buckets) {
      temp = this.buckets[i].head;
      if (temp.key == key && temp.next == null) {
        this.buckets.splice(i, 1);
        console.log("True");
        return;
      } else {
        if (temp.key == key && temp.next != null) {
          this.buckets[i].head = temp.next;
          console.log("True");
          return;
        }
        while (temp.next != null) {
          if (temp.next.key == key) {
            temp.next = temp.next.next;
            console.log("True");
            return;
          }
          temp = temp.next;
        }
      }
    }
    console.log("False");
  }

  printMapKey() {
    let string = "";
    let template = "";
    let temp = "";
    for (let i in this.buckets) {
      temp = this.buckets[i].head;
      template = `${temp.key} ===> `;
      string = string + template;
      while (temp.next != null) {
        temp = temp.next;
        template = `${temp.key} ===> `;
        string = string + template;
      }
    }
    console.log(string);
  }

  length() {
    let temp = "";
    let counter = 0;
    for (let i in this.buckets) {
      temp = this.buckets[i].head;
      counter++;
      while (temp.next != null) {
        temp = temp.next;
        counter++;
      }
    }
    console.log("Length Is:");
    console.log(counter);
  }

  keys() {
    let keysArray = [];
    let temp = "";
    for (let i in this.buckets) {
      temp = this.buckets[i].head;
      keysArray.push(temp.key);
      while (temp.next != null) {
        temp = temp.next;
        keysArray.push(temp.key);
      }
    }
    console.log("Your Keys are:");
    console.log(keysArray);
  }

  values() {
    let valuesArray = [];
    let temp = "";
    for (let i in this.buckets) {
      temp = this.buckets[i].head;
      valuesArray.push(temp.value);
      while (temp.next != null) {
        temp = temp.next;
        valuesArray.push(temp.value);
      }
    }
    console.log("Your Values are:");
    console.log(valuesArray);
  }

  clear() {
    for (let i in this.buckets) {
      this.buckets[i].head = null;
    }
    console.log("Entries Cleared");
    console.log(this.buckets);
  }

  entries() {
    let mainArray = [];
    let temp = "";
    for (let i in this.buckets) {
      temp = this.buckets[i].head;
      mainArray.push([this.buckets[i].head.key, this.buckets[i].head.value]);
      while (temp.next != null) {
        temp = temp.next;
        mainArray.push([this.buckets[i].head.key, this.buckets[i].head.value]);
      }
    }
    console.log("Your Entries are:");
    console.log(mainArray);
  }
}
L = new Hashmap();
L.set("banana", "yellow");
L.set("jacket", "blue");
L.set("hdd", "value");
L.set("hi", "value");
L.set("ih", "value");
L.set("hello", "bas");
L.set("Carlos", "this is one");
L.set("Carla", "this is two");
L.set("apple", "red");
L.set("carrot", "orange");
L.set("dog", "brown");
L.set("elephant", "gray");
L.set("frog", "green");
L.set("grape", "purple");
L.set("hat", "black");
L.set("ice cream", "white");
L.set("kite", "pink");
L.set("lion", "golden");
//18
