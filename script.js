const { stat } = require("fs");

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
    let temp2 = "";
    for (let i in this.buckets) {
      temp = this.buckets[i].head;
      if (temp.key == key) {
        this.buckets[i].head = temp.next;
        console.log("True");
        return;
      } else {
        while (temp.next != null) {
          temp2 = temp;
          temp = temp.next;
          if (temp.key == key) {
            temp2.next = temp.next;
            console.log("True");
            return;
          }
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
}
L = new Hashmap();

L.set("hdd", "value");
L.set("hi", "value");
L.set("ih", "value");
L.set("hello", "bas");
L.set("Carlos", "this is one");
L.set("Carla", "this is two");
L.set("apple", "red");
L.set("banana", "yellow");
L.set("carrot", "orange");
L.set("dog", "brown");
L.set("elephant", "gray");
L.set("frog", "green");
L.set("grape", "purple");
L.set("hat", "black");
L.set("ice cream", "white");
L.set("jacket", "blue");
L.set("kite", "pink");
L.set("lion", "golden");
//18
// L.get("lion");
L.showCount();
