// 1. What will be the output of the following code and why?

let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}
outer();    // output: Bob

// 2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);  // output: 15

// 3. Create a function with a nested function and log a variable from the parent function.
function parentFunction() {
    let parentVariable = "I am from Parent!";
    function nestedFunction() {
        console.log(parentVariable);
    }
    nestedFunction();
}
parentFunction();  // output: I am from Parent!

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function loopFunction() {
    for (let i = 0; i < 5; i++) {
        let loopVariable = "I am inside the loop!";
        console.log(loopVariable);
    }
    //console.log(loopVariable);
}
loopFunction(); // output: ReferenceError: loopVariable is not defined

// 5. Write a function that tries to access a variable declared inside another function.

function outerFunction() {
    
    function innerFunction() {
        let innerVariable = "I am from Outer!";
    }
    //console.log(innerVariable);
    innerFunction();
}
outerFunction(); // output: Uncaught ReferenceError: innerVariable is not defined

// 6. What will be the output and why?

// console.log(a);
// let a = 10; // output: Uncaught ReferenceError: can't access lexical declaration 'a' before initialization

// 7. Where is the age variable accessible?

function showAge() {
    let age = 25;
    console.log(age);
}
//console.log(age);  // Answer: C) It will cause an error


// 8. What will be the output of the following code and explain?
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer(); 
// output: Hi, because the inner function has access to the outer function's scope chain and 
// can access the variable message defined in the outer function.


// 9. What will be the output and why?

let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer(); // output: Inner, because the inner function has its own x variable that shadows the outer x variable.

// 10. What will be the output and why?

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce(); // output: -1, -2, because the inner function has access to the count variable in the outer function's scope.