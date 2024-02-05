var a = 5;
var b = 5;
console.log(a + b);
var usr = {
    name: "John",
    age: 18,
};
var canDrive = function (usr) {
    console.log('usr.name', usr.name);
    if (usr.age > 18) {
        console.log("".concat(usr.name, " can drive"));
    }
    else {
        console.log("".concat(usr.name, " cannot drive"));
    }
};
canDrive(usr);
//classes 
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person();
tom.msg = "Hello, world!";
tom.speak();
