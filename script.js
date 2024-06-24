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

      hashCode = hashCode % 16;
    }
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      let node = new Node(key, value);

      if (this.buckets[index] == undefined) {
        this.buckets[index] = new LinkedList(node);
        console.log(this.buckets[index].head.key)
        console.log(0)
      } else {
        if (
          this.buckets[index].head.value == node.value &&
          this.buckets[index].head.key == node.key
        ) {
          console.log(1)
          return;
        } else {
          if (
            this.buckets[index].head.key == node.key &&
            this.buckets[index].head.value != node.value
          ) {
            this.buckets[index].head = node;
            console.log(2)
          }

          if (this.buckets[index].head.key != node.key) {
            this.buckets[index].head.next = node;
            // console.log(this.buckets[1].value)
            // console.log(this.buckets[index].key,node.key)
            console.log(3)
            console.log("done")
          }
        }
      }
    }
    console.log(this.buckets)
  }
}
L = new Hashmap();
// L.hash("leda");
// L.hash("lead")
L.set("hi", "value");
L.set("hi", "value");
L.set("ih", "value");

L.set("hello","bas")
L.set("hi","not same value")

