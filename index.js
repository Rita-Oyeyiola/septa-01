// alert("Hello world")
// document.write("Hello septa people")
// console.log("Hi guys")


console.log("hey");

// const name = "Silvia"

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

    // object
    let name5 = "Tayo"

    let car1 = {
        color: "pink",
        brand: "toyota",
        plateNumber: 257825372,
        model: "corolla",
        tyreColor: "black",
        year: 2010,
        drive: function () {
            console.log("i am driving")
        }
    }

    let person1 = {
        skinColor:"black",
        year:15,
        name:"Toyin",
        address:{
            streetName: "kayode street",
            localGovt: "shomolu",
            state: "Lagos", 
                  
        },       
        greet: function greet() {
            console.log("Hello guys");
        }
    }

        console.log(person1.address.localGovt)

    console.log("old object", person)

    // person1.age = 20

    console.log("new onject", person)
    console.log(person1.name)

    // let phone = {
    //     color : "white",
    //     brand : "tecno",
    //     charger : "type C",
    //     typing: function typing(){
    //         console.log("Open whatsapp");
    //     }   
    // }
    // console.log(phone.brand)
     
    // phone.brand = "white"
    // console.log(phone.color)

// Array
    let animal = ["lion", "goat"]

    let cars = ["toyota", "benz", "lexus", "bentley"]
    console.log(cars[2])
    console.log(cars)

    cars[2] = "porsche"
    console.log(cars)

    console.log(animal[1])


    let phone = ["iphone", "samsung", "tecno", "nokia"]
    console.log(phone[1])
    console.log(phone)
    
    phone[1] = "itel"

//     let persons = [{
//         gender: "female",
//         ageBracket: "15-20",
//         school: "queens college",
//         address: {
//             street: "adekunle street",
//             city:"Lagos"
//         }
//     },
//     {
//         gender: "female",
//         ageBracket: "15-20",
//         school: "queens college",
//         address: {
//             street: "adekunle street",
//             city:"Lagos" 
//     }
// ]

let persons = [
    {
        gender: 'female',
        ageBracket: "15-20",
        school: "queens college",
        address: {
            street: "adekunle street",
            city: "lagos"
        }
    },
    {
        gender: 'male',
        ageBracket: "15-20",
        school: "Kings college",
        address: {
            street: "adekunle street",
            city: "lagos"
        }
    },
    "Adebayo"      
]
    console.log(persons[0].gender),
    console.log(persons[1].gender),

    persons[0].address.city = "ogun",
    persons[1].address.city = "ogun",
    
    persons[2] = "Rita"
    console.log(persons[2])
    
// access both genders 
// change city to ogun
// change adebayo to your name

    // array is zero index

    // >,<,<=,>=,==,===,
    // > = greater than
    // < = less than
    // 
    let rainFall = true
    let sunShine = false

    if (rainFall) {
        console.log("yes rain fall")
    } else {
        console.log("no rain didnt fall")
    }

    // // if (condition){
    //     // code to be executed
    // }

    // != ==
    // != ===

    //  let age2 = 18;
    //  if (age > 18){
    //     console.log("yes age is greater");
    //  }else if (age >= 20){

    //  }
     let age1 = 5;

     if (age > 20){
        console.log("age is greater than 20")
     }else if (age < 3){
        console.log("age is less than 3")
     } else {
        console.log("no")
     }


     let dogBark = true;
     let lionRoar = false

     if (!dogBark) {
        console.log("aaa")
     } else if (!!dogBark) {
        console.log("cccc")
     }
     else if (!lionRoar) {
        console.log("bbb")
     }
     else {
        console.log("no")
     }

      if(2!=2) {
        console.log("yes")
      }else{
        console.log("No")
      }

    //   OR & AND
    // true || false = true
    // true || true = true
    // false || false = false

    // true && false = false
    // true && true = true
    // false && false = false

    // let votersAge = true;
    // let citizenship = false

    //   if (votersAge) {
    //     console.log("Voter 1 is 20yrs old")
    //   }else if (votersAge) {
    //     console.log("voter 2 is 25yrs old")
    //   }

    //   if(citizenship) {
    //     console.log("No")
    //   } else {
    //     console.log("Yes")
        
    //   }
    //   if (votersAge) {
    //     console.log("eligible")
    //   } else {
    //     console.log ("not eligible")
    //   }
    //   if (!votersAge) {
    //     console.log("eligible")
    //   } else {
    //     console.log("not eligible")
    //   }

    // Assignment
    let votersAge = prompt("Enter your age");
      console.log(votersAge)

    let citizenship = prompt("Are you a citizen?: (Yes/No)");
      console.log(citizenship)

      if (votersAge >= 18 && citizenship === "Yes") {
        console.log ("voter is eligible to vote")
      }
      else {
        console.log("voter is not eligible to vote")
      }





     


        


