
// 1. Write a Function to Convert Celsius to Fahrenheit

function celsiusToFarenheight(celcious){
   let fahrenheit = (celcious * 9/5) + 32;  
    console.log(celcious+"C", "Celcious  = ", fahrenheit+"F");
}
celsiusToFarenheight(32);


// 2. Create a Function to Find the Maximum of Two Numbers

function maxNumber(a,b){
    if(a>b){
        console.log(a, "is maximum");
    }
    else{
        console.log(b ,"is maximum");
    }
}

maxNumber(10,20);

// 3. Function to Check if a String is a Palindrome

function  isPalindrome(str){
    let str_len = str.length;
    for(let i = 0; i< str_len/2; i++){
        if(str[i] !== str[str_len-1-i]){
            return false;
        }
    }
    return true;   
}
let result = isPalindrome("abba");
if(result== true){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}

// 4. Write a Function to Find Factorial of a Number

function factorial(n){
    if(n==1){
        return 1;
    }else{
        return n* factorial(n-1);
    }
}
console.log(factorial(3));

//5. Write a function to Count Vowels in a String

function countVowels(str){
    let splitStr = str.split("");
    let vowels = "aeiouAEIOU"
    let splitVowel = vowels.split("");
    // console.log(splitVowel);
    let count = 0;
    for(let i=0; i<splitStr.length; i++){
        for(let j=0; j<splitVowel.length ; j++){
            if(splitStr[i]==splitVowel[j]){
                count++;
            }
        }
    }
    return count;

}
let vowels = countVowels("AbbuE");
console.log("Total number of vowel =", vowels);

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

function capitalizeWords(sentence){
    let splitStr = sentence.split(" ");
    for(let i=0; i<splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    return splitStr.join(" ");
}
let capitalizedStr = capitalizeWords("hello world bangladesh");
console.log(capitalizedStr);

// 7. Use an IIFE to Print “Hello, JavaScript!”

(function(str){
    console.log("Hello,",str);
})("JavaScript!");

//8. Create a Simple Callback Function 

function greet(name, cb){
    console.log("Hello", name);
    cb();
}
function add(){
    console.log("This is a callback function");
}
greet("Emran", add);



