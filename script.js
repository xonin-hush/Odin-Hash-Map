class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
class Hashmap {
  constructor() {
    this.buckets = [];
    this.buckets.length=16

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
    let index = this.hash(key);
    console.log(index)
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      let node = new Node(key,value);
      this.buckets[index] = node;
      console.log(this.buckets)
    }

    console.log(this.buckets);
    // console.log(hashCode);
  }
}
L = new Hashmap();

L.set("edla", "value");
// L.hash("leda");
// L.hash("lead")
// L.set("hi", "value");
