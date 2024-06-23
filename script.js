class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
class Hashmap {
  constructor() {
    this.buckets = [];
    this.bucketSize = [];
    // this.loadFactor=0.75
    // this.product=this.bucketSize*this.loadFactor
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);

      hashCode = hashCode % 16;
    }
    console.log(hashCode);
    return hashCode;
  }
  set(key, value) {
    let hashCode = this.hash(key);
    let node = new Node(key.value);
    this.buckets[hashCode] = node;
    console.log(this.buckets)
    // console.log(hashCode);
    // let index = hash(key);
    // console.log(index);
    // if (index < 0 || index >= bucket.length) {
    // throw new Error("Trying to access index out of bound");
    // }
  }
}
L = new Hashmap();
L.hash("hello");
L.hash("edla");
L.set("edla", "value");
// L.hash("leda");
// L.hash("lead")
// L.set("hi", "value");
