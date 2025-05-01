function createHelloWorld() {
  return function(...args) {
    return "Hello World";
  };
}
const f = createHelloWorld();

console.log(f()); 
console.log(f({}, null, 42));
console.log(f("anything", 123));
