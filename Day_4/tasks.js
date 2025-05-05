let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day."); // Output: It's a normal day.
}


//  Build an ATM Cash Withdrawal System
let amount = 1000;
if(amount%100 == 0){
    console.log("Withdrawal successful");  // Output: Withdrawal successful
}else{
    console.log("Invalid amount");
}

// 3. Build a Calculator with switch-case
let operator = "+";
let num1 = 10;
let num2 = 5;
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operator");
}
console.log(result); // Output: 2


// 4. Pay for your movie ticket

let age = 62;
let ticketPrice = 10;
if (age < 18) {
    ticketPrice = 5;
}
else if (age >= 60) {
    ticketPrice = 8; 
}
else if (age >= 18 && age < 60) {
    ticketPrice = 10;
}
console.log("Ticket Price: $" + ticketPrice); // Output: Ticket Price: $10

// 5. Horoscope Sign Checker
let birthDate = new Date("1996-01-01");
let month = birthDate.getMonth() + 1; // Months are zero-based
let dayOfMonth = birthDate.getDate();
let zodiacSign;
switch (true) {
    case (month == 1 && dayOfMonth >= 20) || (month == 2 && dayOfMonth <= 18):
        zodiacSign = "Aquarius";
        break;
    case (month == 2 && dayOfMonth >= 19) || (month == 3 && dayOfMonth <= 20):
        zodiacSign = "Pisces";
        break;
    case (month == 3 && dayOfMonth >= 21) || (month == 4 && dayOfMonth <= 19):
        zodiacSign = "Aries";
        break;
    case (month == 4 && dayOfMonth >= 20) || (month == 5 && dayOfMonth <= 20):
        zodiacSign = "Taurus";
        break;
    case (month == 5 && dayOfMonth >= 21) || (month == 6 && dayOfMonth <= 20):
        zodiacSign = "Gemini";
        break;
    case (month == 6 && dayOfMonth >= 21) || (month == 7 && dayOfMonth <= 22):
        zodiacSign = "Cancer";
        break;
    case (month == 7 && dayOfMonth >= 23) || (month == 8 && dayOfMonth <= 22):
        zodiacSign = "Leo";
        break;
    case (month == 8 && dayOfMonth >= 23) || (month == 9 && dayOfMonth <= 22):
        zodiacSign = "Virgo";
        break;
    case (month == 9 && dayOfMonth >= 23) || (month == 10 && dayOfMonth <= 22):
        zodiacSign = "Libra";
        break;
    case (month == 10 && dayOfMonth >= 23) || (month == 11 && dayOfMonth <= 21):
        zodiacSign = "Scorpio";
        break;
    case (month == 11 && dayOfMonth >= 22) || (month == 12 && dayOfMonth <= 21):
        zodiacSign = "Sagittarius";
        break;
    case (month == 12 && dayOfMonth >= 22) || (month == 1 && dayOfMonth <= 19):
        zodiacSign = "Capricorn";
        break;
}
console.log("Zodiac Sign: " + zodiacSign); // Output: Zodiac Sign: Pisces



// 6. Which Triangle?

let side1 = 3;
let side2 = 4;
let side3 = 5;
let triangleType;
if (side1 === side2 && side2 === side3) {
    triangleType = "Equilateral Triangle";
}
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    triangleType = "Isosceles Triangle";
}
else {
    triangleType = "Scalene Triangle";
}
console.log("Triangle Type: " + triangleType); // Output: Triangle Type: Scalene Triangle

