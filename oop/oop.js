// prototype based inheritance. create
/**
 * create a parent functionParent(){}
 * create a child functionChild(){}
 * connect them by functionParent.call() in functionChild()
 * connect methods of parent with Object.create(functionParent.prototype)
 * create object with new key word
 * Then its work like class based inheritance.
 */
//  Introduce to ES6 class inheritance updated version of prototype based inheritance
class Player {
  constructor(name, age, avg) {
    this.name = name;
    this.age = age;
    this.avg = avg;
  }
  bat() {
    console.log(`${this.name} can batting`);
  }
  ball() {
    console.log(`${this.name} can bowling`);
  }
}

// subclass:

class Captain extends Player {
  constructor(name, age, avg, position) {
    super(name, age, avg);
    this.position = position;
  }

  captain() {
    console.log("Mahmudullah is captain");
  }
  bat() { // part of polymorphism
    super.bat();
    console.log(`${this.name} Captain can batting`);
  }
}

const mahmudullah = new Captain("Mahmudullah", 31, 26.3, "captain");
console.log(mahmudullah);
console.log(mahmudullah.captain());
console.log(mahmudullah.bat());
console.log(mahmudullah.ball());
const shakib = new Player("Shakib", 34, 23.3,"Sub Captain");

console.log(shakib);
shakib.ball();
const tamim = new Player("tamim", 35, 31.3,"Opener");
console.log(tamim);
tamim.bat();
