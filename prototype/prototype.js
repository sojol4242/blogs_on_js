//  Object.create()

const captain={
    name: "Mahmudullah",
    age:33,
    runs:"1230",
    wckts:36,
    avg:23.45,
    sr:120.2,
    team:"Bangladesh"
}
// console.dir(captain);

const player1=Object.create(captain)
// console.dir(player.age);


// prototype:
/**
 * the prototype is a function property which is point to an object
 * 
 */
// function test() {} 
// console.dir(test.prototype);

// Understanding with normal function

// function Player(name,age){
//     // let player=Object.create(Player.prototype);
//     this.name= name;
//     this.age= age;
//     // return player;
// }

// Player.prototype={
//     bat(){
//         console.log("He is an opening batsman");
//     },
//     ball(){
//         console.log("He can bowling");
//     }
// }

// const shakib=Player("Shakib",34);

// const shakib= new Player("Shakib",34);
// shakib.ball();
// console.log(shakib);

// introduce to class 


 
class Player {

    constructor(name,age) {
        this.name= name;
        this.age= age;
    }
    bat(){
        console.log(`${this.name} is an opening batsman`);
    }
    ball(){
        console.log(`${this.name} can bowling`);
    }

}
const shakib= new Player("Shakib",34);
shakib.ball();
shakib.bat();
console.log(shakib);
  