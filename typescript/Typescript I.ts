

function maxValue(value1: number, value2: number): number {
    return Math.max(value1, value2);
}

maxValue(2, 9);


// ***** Definición de tipos

// Boolean
let isBoolean: Boolean = false;

// Number
let decimal: number = 43.645;
let age: number = 30;

// String
let myName: string = 'Samuel';

// Array
let listAges: number[] = [10, 21, 30, 26];
let listNames: Array<string> = ['Juan', 'Pedro', 'Alfredo'];

// Tuples
let personTuple: [string, number];
personTuple = ['Samuel', 30];

// Enums
enum Color { Red, Green, Yellow, Purple, Brown };

// Any
let notSure: any = '345';
notSure = 24;
notSure = true;

// Void
function alertUser(): void {
    alert('Alert with function void');
}

// Null
let u: null = null;

// Undefined
let ud: undefined = undefined;

// Definición de variables con let, no con var. 
// Let es más seguro utilizarlo.

// Clases
class Animal {
    readonly name: string;
    private age: number;
    public skinColor: Color;
    constructor(name: string, age: number, skinColor: Color) {
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }

    greet(): string {
        return `Hello, ${name}`;
    }
}

let animal = new Animal('Samuel', 30, Color.Brown);

// Clases herencia

class Dog extends Animal {
    greet(): string {
        return `Woof! Woof! ${name}`;
    }
}

// Abstract Clases

abstract class Person {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// NO puedo let personDeveloper = new Person('Samuel');
class Developer extends Person {
}
let personDeveloper = new Developer('Samuel');

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