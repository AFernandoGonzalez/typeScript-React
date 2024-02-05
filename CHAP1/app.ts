let a: number = 5;
let b: number = 5;

console.log(a + b); 

interface User {
    name: string;
    age: number;
}

const usr: User = {
  name: "John",
  age: 18,
};

const canDrive = (usr: User) => {
    console.log('usr.name', usr.name);
    if(usr.age > 18) {
        console.log(`${usr.name} can drive`);
    }else { 
        console.log(`${usr.name} cannot drive`);
    }
}

canDrive(usr);


//classes 
class Person {
    constructor() {}
    msg: string;
    speak() {
        console.log(this.msg);
    }
}

const tom = new Person();
tom.msg = "Hello, world!";
tom.speak();