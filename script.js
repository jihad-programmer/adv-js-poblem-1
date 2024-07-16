// Ans 1



// function scopeTest() {
//     if (true) {
//       var varVariable = "I am var";
//       let letVariable = "I am let";
//       const constVariable = "I am const";
//     }
//     console.log(varVariable);
//     console.log(letVariable);
//     console.log(constVariable);
//   }
  
//   scopeTest();


//result:
// I am var
// ReferenceError: letVariable is not defined
// ReferenceError: constVariable is not defined


//why :

// varVariable: Prints "I am var" because it's accessible everywhere in the function.

// letVariable and constVariable: Cause errors because they're only available inside the if block.






// ans 2

// function greet(name, greeting = "Hello") {
//     return `${greeting}, ${name}!`;

// }


// console.log(greet("Alice")); // "Hello, Alice!"
// console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"






// ans 3

function sum(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
}

// Examples
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5







//ans 4

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

let mergedArray = [...array1,...array2,...array3]

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]









// ans 5

// const name = "John";
// const age = 30;

// let person = {
//   greet(){
//     console.log(`Hi, I'm ${name} and I'm ${age} years old.`)
//   }  
// }

// console.log(person.greet());







//ans 6

const fruits = ["apple", "banana", "cherry"];

for (let MyFruits of fruits){
    console.log(MyFruits);
    
}

    



      

//ans 7

const name = "Alice";
const age = 25;


const message = `My name is ${name} and I am ${age} years old.`


console.log(message);







//ans 8

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];

  for (let Info of students) {
    console.log(`${Info.name}: ${Info.grade}`);
  }






//ans 9  

const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];


 for (let arr of nestedArrays){
    
    let sum = 0;

    for (let num of arr){
        sum += num
    }


    console.log(sum);
 }




 

 // ans 10

 const a = 5;
const b = 10;

let set = `The sum of ${a} and ${b} is ${a+b}.`
  
const result = set;

console.log(result); // "The sum of 5 and 10 is 15."
