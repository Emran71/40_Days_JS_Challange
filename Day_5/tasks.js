// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    console.log(str); // Output: * \n ** \n *** \n **** \n ***** 
}

// 2. Craete Multiplication Table (Using for loop)
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(10); // Output: 5 x 1 = 5 \n 5 x 2 = 10 \n ... \n 5 x 10 = 50

// 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.
let sum = 0;
for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}   
console.log(sum); // Output: 125250


// 4. Skipping Multiples of 3

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue; 
    }
    console.log(i); // Output: All numbers from 1 to 20 except multiples of 3
}


// 5. Reverse Digits of a Number (Using while loop)
function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        const digit = num % 10; 
        reversed = reversed * 10 + digit; 
        num = Math.floor(num / 10); 
    }
    console.log(reversed);
}
reverseNumber(6789) // Output: 9876




