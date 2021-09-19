var person = {
    name: 'John ',
    age: 34,
    personInner: {
        address: 'Rangpur',
        msg: function (){
            console.log(`${this.name} live is ${this.personInner.address}`);
        }
    },


    anotherInner: {
        dept:"EEE",
        another: function(){
            console.log(this);
        }

    }
}

// console.log(person.personInner.msg());
console.log(person.personInner.msg.call(person));
// console.log(person.anotherInner.another.call(person.personInner));

console.log(Math.round(1.499));