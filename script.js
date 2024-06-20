class Hashmap {
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      console.log(hashCode)
      hashCode = hashCode % 16;
    }
    console.log(hashCode);
    return hashCode;
  }
}
L = new Hashmap();
// L.hash("hello");
// L.hash("xonin");
L.hash("leda");
// L.hash("some good guy");
