// // 1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
console.log(counter);
counter();
counter(); // output: 1, 2 because count is a closure variable. So it will remember the last value of count

// // 2. What will be the output of the following code and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()()); // output: 100 because the inner function has access to the variable x from the outer function's scope, and it returns x squared.



// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

const button = document.createElement('button');
button.textContent = 'Click me';
button.style.width = '100px';
button.style.height = '50px';
document.body.appendChild(button);
let clickCount = 0;
button.addEventListener('click', function () {
    clickCount++;
    console.log("Button cliecked ", clickCount ," times");
});

// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
function createMultiplier(multiplier){
    return function(num){
        return num * multiplier;
    }  
}
const double = createMultiplier(2);
console.log(double(5)); // output: 10

// 5. What happens if a closure references an object?

// Here is the answer: ii) The object remains in memory as long as the closure exists

// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.
function counterFactory(){
    let count = 0;
    return {
        increment: function(){
            count++;
            console.log(count);
        },
        decrement: function(){
            count--;
            console.log(count);
        },
        reset: function(){
            count = 0;
            console.log(count);
        }
    }
}
const counter1 = counterFactory();
counter1.increment(); // output: 1
counter1.increment(); // output: 2
counter1.decrement(); // output: 1
counter1.reset(); // output: 0


