// Iterators

let listNumber: Array<number> = [10, 11, 12];

for (let number of listNumber) {
    console.log(number); // 10, 11, 12
}

for (let number in listNumber) {
    console.log(number); // 0, 1, 2
}

for (let i = 0; i < listNumber.length; i++) {
    console.log(i); // 0, 1, 2
    console.log(listNumber[i]); // 10, 11, 12
}

// Genéricos
// T se transforma al tipo de dato
// any no se transforma al tipo

class CustomCollection<T> {
    private itemArray: Array<T>;
    constructor() {
        this.itemArray = [];
    }

    Add(item: T) {
        this.itemArray.push(item);
    }
}

class PersonInfo {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}


let listName = new CustomCollection<string>();
listName.Add('Samuel');
let listAge = new CustomCollection<number>();
listAge.Add(30);
let listPersonInfo = new CustomCollection<PersonInfo>();
listPersonInfo.Add(new PersonInfo('Pedro'));


// Interfaces

interface Message {
    title: string;
    message: string;
    errorNumber?: number;
}

function WriteMessage(message: Message) {
    console.log(message.title);
}

// Módulos y namespace

// Módulo nos permite crear nuestro propio scope. Es decir,
// las variables, functions, class, enums, etc. declaradas
// dentro del módulo no son visibles al exterior,
// excepto si las marcamos como export. Para el consumo de las
// variables, functions, class, enums, etc. tenemos que importar
// el módulo con import


namespace Validator {
    export interface NumberValidator {
        isValidNumber(value: number): boolean;
    }

    export class ZipCodeValidator implements NumberValidator {
        isValidNumber(value: number) {
            return value > 0 && 10 < value;
        }
    }
}

let validator: Validator.NumberValidator = new Validator.ZipCodeValidator;

validator.isValidNumber(5);


// Decorators
// Son functiones que modifican una clase o un método;

function Logged() {
    return function (target: any) {
        console.log("Logged!");
    }
}

@Logged()
class Test {
    method() {
        return true;
    }
}
