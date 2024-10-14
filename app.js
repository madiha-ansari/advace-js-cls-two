// array and object destructuring"
// const users=[
//     {firstName:"Tayyaba",rollNO:90309,age:23},
//     {firstName:"Maryam",rollNO:8794,age:20},
//     {firstName:"Mehak",rollNO:23846,age:20}
// ]
// let [{rollNO:zipcode},{firstName},{age}] = users
// console.log(zipcode,age,firstName);


// const users = [
//     {firstName: "Tayyaba", rollNO: 90309, age: 23},
//     {firstName: "Maryam", rollNO: 8794, age: 20},
//     {firstName: "Mehak", rollNO: 23846, age: 20}
// ];
// let { firstName, rollNO, age } = users[2];
// console.log(firstName, rollNO, age);


// let age = 5;
// let drink;
// drink = age > 3 ? "coffeee" : age == 5 ? "water" : "milk";
// console.log(drink);



// function numbers(num1){
//     console.log(num1);
//   }
//   numbers(2)


// function numbers(...num1){
//   console.log(num1);
// }
// numbers(2,4,5)

// console.log(typeof(null) );

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(typeof(arr));  // Output: "object"


// console.log(typeof NaN);


// let arr = [1, 2, 3];
// let notArr = "This is not an array";

// console.log(Array.isArray(arr));      // Output: true
// console.log(Array.isArray(notArr));   // Output: false

// let a = [1,2,3,4,5];
// let b = [6,7,8,9,10];
// let c = [...a,...b];
// console.log(c);

// function addNumbers(a, b, callback) {
//     let sum = a + b;
//     callback(sum); // یہ callback function کو call کرتا ہے
//   }
  
//   function printResult(result) {
//     console.log("Result: " + result);
//   }  
//   addNumbers(5, 3, printResult);

//   function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback(); // یہ callback function کو call کرتا ہے
//   }
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }
//   // greet function کو call کرتے ہوئے sayGoodbye کو callback کے طور پر pass کرتے ہیں
//   greet("Ali", sayGoodbye);
  

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable:', outerVariable);
        console.log('Inner Variable:', innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
