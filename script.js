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
    let something = 4;
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      let node = new Node(key, value);
      if (this.buckets[index] == undefined) {
        this.buckets[index] = node;
      }
      else{
        if(this.buckets[index].value==node.value){
          return
        }
        else{
          this.buckets[index]=node;
        }
      }
    }
  }
}
L = new Hashmap();

L.set("edla", "value");
L.set("edla", "new");
L.set("edla", "new");

// L.hash("leda");
// L.hash("lead")
// L.set("hi", "value");
