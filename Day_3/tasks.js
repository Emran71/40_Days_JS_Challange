// 1. Odd or Even?

let number = 25;
if (number % 2 === 0) {
    console.log(number + " is Even"); // 25 is Even
}
else {
    console.log(number + " is Odd");
}

// 2. Do you have a Driving License?

let age = 19;
let hasDrivingLicense = true;
if (age >= 18 && hasDrivingLicense) {
    console.log("You can drive");  // You can drive
}
else if (age >= 18 && !hasDrivingLicense) {
    console.log("You can apply for a driving license"); // 
}
else {
    console.log("You cannot drive"); 
} 

//Calculate CTC with a Bonus
let MontlySalary = 12300;
let yearlySalary = MontlySalary * 12;
let bonus = yearlySalary * 0.2;
let ctc = yearlySalary + bonus;
console.log("Your CTC is: " + ctc);  // 14760

// 4. Write a program for the Traffic Light Simulation
let trafficLight = "Yellow";
switch (trafficLight.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready"); // Get Ready
        break;
    case "green":
        console.log(" You can Go");
        break;
    default:
        console.log("Invalid Traffic Light");
}

// 5. Create an Electricity Bill Calculator

let per_day_unit = 5;
let per_month_cost = 5*150;
console.log("Total cost Per month is :"+ per_month_cost);  // 7500
let per_year_cost = per_month_cost * 12;
console.log("Per Year Cost : "+ per_year_cost); // 9000
let anual_payment = per_year_cost - per_year_cost *0.2;
console.log("Per Year Cost After 20% discount : " + anual_payment); // 7200

// 6. Leap Year Checker
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year"); // 2024 is a Leap Year
}
else {
    console.log(year + " is not a Leap Year"); //
}

// 7. Max of Three Numbers

let p = 10;
let q = 20;
let r = 30;
let maxNum = p;
if (q > maxNum) {
    maxNum = q;
}
if (r > maxNum) {
    maxNum = r;
}
console.log("The maximum number is: " + maxNum); // 30


// 8. Bitwise Doubling
let bitwiseNum = 5;
let doubledNum = bitwiseNum << 1;
console.log("The doubled number using bitwise operator is: " + doubledNum); // 10



