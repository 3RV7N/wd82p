// The Class syntax
//
class Dog {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
  }

  get breed() {
    return this._breed;
  }

  set breed(value) {
    this._breed = value;
  }

  bark() {
    console.log("Arf arf arf!");
  }
}

//
function DogConstructor(breed, color) {
  this.breed = breed;
  this.color = color;
  this.bark = function () {
    console.log("Arf arf arf");
  };
}

//
function dogFactory(breed, color) {
  const bark = () => console.log("Arf arf arf!");

  return { breed, color, bark };
}

//IIFE

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

console.log(calculator.add(5, 5));
console.log(calculator.mul(5, 5));
