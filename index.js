// alert("Hello world")
// document.write("Hello septa people")
// console.log("Hi guys")


console.log("hey");

const name = "Silvia"

console.log(2 + 2);

// var name = "Femi"

fish = "catfish";


function dosomething() {
    console.log(name)
}

const church77 = "Deeper life";


// data type

// 1. String

let sentence = "i went to market";

// 2. Number

let age = 20
let newAge = 10

console.log(age + newAge)

// Concertenation

// 4. Boolean

let isFemiAwake = true

// 5. typeof
console.log(typeof (age));

const website = "google";
const url = "https://www." + website + ".com"

console.log(url)

const oldName = "bayo";
const oldAge = "15"

console.log("I know" + oldName + "he is" + oldAge + "years old");

let name1 = "John"
let name2 = "Matthew"

console.log(name1 + name2)


let name3 = "Rita";
let Address = "ajah"
let sch = "Kwasu"

console.log("My name is" + " " + name3 + " " + "I live at" + " " + Address + " " + "I attended" + " " + sch);


// Difference between var, let and const
console.log("var are function-scoped, meaning they are only accessible within the function they are declared in. They are only accessible after declaration within that block ")
console.log("let are blocked-scoped, meaning they are only within the block. They are only accessible after their declaration within that block, they can be reassigned but they cannot be redeclared")
console.log("const are constants and block-scoped, they cannot be reassigned after they are declared.")

// Data types
// 6. undefined
console.log("Undefined is a variable without a value, has the value undefined")
let car;
let = undefined;

// 7. Null
console.log("Null are empty values. It has both legal value and a type")
let dog = ""

// 8. Object
console.log("Object arre written with curly braces {}. They are written as name:value pairs,seperated by commas")
const person = {firstName:"Rita", lastName:"Oyeyiola"};

// 9. Symbol
console.log("Symbol values are guaranteed to be unique, which means no two 'symbol' values are equal, even if they have the same description")
const uniqueSymbol = Symbol ();


let food;

console.log(food)



// // params or argument or placeholder or local var

// function greet() {      // declare function
//     console.log("Hello my people");
// }
// greet()  // invoke or call

// function sum(x) {
//     console.log(2 + x);
// }
// sum(5)  // argument



function greet(name){
    console.log("hello" + name)
}

greet("Gabriel")
greet("Rejoice")



function addition(a, b) {
    console.log(a+b)
}

addition(2,2)
addition(3,2)
addition(4,2)
addition(5,2)


let sum1 = 2 + 2
let sum2 = 3 + 2
let sum3 = 4 + 2
let sum4 = 5 + 2


function country(countryname, first3letters){
    console.log(countryname + " " + first3letters)
}
country("Nigeria","Nig")
country("Ghana","Gha")
country("Brazil","Bra")
country("Tokyo","Tok")
country("Paris","Par")



// function sum(a,b = 3){
//     console.log(a + b + "=")
// }
// sum("2 + 1", "3")

    function sum(a,b){
        // console.log(a + b)
        console.log(a + "+" + b + "=", a + b)
    }
    sum(2,3)
    sum(2,2)
    sum(4,4)



    function multiply(a,b){
        // console.log(a * b)
        console.log(a + "*" + b + "=", a * b)
    }
    multiply(4,3)
    multiply(2,2)
    multiply(5,2)


    function minus(a,b){
        // console.log(a - b)
        console.log(a + "-" + b + "=", a - b)
    }
    minus(10,2)
    minus(5,3)
    minus(20,10)
