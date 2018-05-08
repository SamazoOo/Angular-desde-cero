"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function maxValue(value1, value2) {
    return Math.max(value1, value2);
}
maxValue(2, 9);
// ***** Definición de tipos
// Boolean
var isBoolean = false;
// Number
var decimal = 43.645;
var age = 30;
// String
var myName = 'Samuel';
// Array
var listAges = [10, 21, 30, 26];
var listNames = ['Juan', 'Pedro', 'Alfredo'];
// Tuples
var personTuple;
personTuple = ['Samuel', 30];
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Purple"] = 3] = "Purple";
    Color[Color["Brown"] = 4] = "Brown";
})(Color || (Color = {}));
;
// Any
var notSure = '345';
notSure = 24;
notSure = true;
// Void
function alertUser() {
    alert('Alert with function void');
}
// Null
var u = null;
// Undefined
var ud = undefined;
// Definición de variables con let, no con var. 
// Let es más seguro utilizarlo.
// Clases
var Animal = /** @class */ (function () {
    function Animal(name, age, skinColor) {
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }
    Animal.prototype.greet = function () {
        return "Hello, " + name;
    };
    return Animal;
}());
var animal = new Animal('Samuel', 30, Color.Brown);
// Clases herencia
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.greet = function () {
        return "Woof! Woof! " + name;
    };
    return Dog;
}(Animal));
// Abstract Clases
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
// NO puedo let personDeveloper = new Person('Samuel');
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Person));
var personDeveloper = new Developer('Samuel');
// Condicionales
if (personDeveloper.name === 'Samuel') {
    console.log('Developer found!');
}
switch (animal.skinColor) {
    case Color.Brown:
        console.log('brown!');
        break;
    case Color.Green:
        console.log('green!');
        break;
    default:
        console.log('no color found!');
        break;
}
