// // 1. What will be the output and why?

// const user = { name: "Alex", age: undefined };
// console.log(user.age ?? "Not provided");

// // output : The output will be  Not provided because age value is undefined.If the value is valid number then it will give that age as output.


// // 2. What will happen if we try to modify a frozen object?

// const obj = Object.freeze({ a: 1 });
// obj.a = 2;
// console.log(obj.a);
// // output: the object can not modify by changing the tha value bocause freeze value can not change or modify in an object. so the value of the key a = 1.


// // 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

// const person = {
//     name: "Tapas",
//     company: {
//       name: "tapaScript",
//       location: {
//         city: "Bangalore",
//         zip: "94107"
//       }
//     }
//   };

// const {name, company: {location:{city,zip}}} = person;
// console.log(name);
// console.log(city);
// console.log(zip);

// // output: Tapas
// // Bangalore
// // 94107

// //4. Build a Student Management System
// // Store student details in an object (name, age, grades).
// // Implement a method to calculate the average grade.

// const student = {
//     name: "John",
//     age: 20,
//     grades: [85, 90, 78],
//     calculateAverage: function() {
        
//     }
// };
// console.log(student.calculateAverage()); // output: 84.33333333333333

let customers = [
    {
        id: 001,
        f_name: "Abby",
        l_name: "Thomas",
        gender: "M",
        married: true,
        age: 32,
        expense: 500,
        purchased: ["Shampoo", "Toys", "Book"],
    },
    {
        id: 002,
        f_name: "Jerry",
        l_name: "Tom",
        gender: "M",
        married: true,
        age: 64,
        expense: 100,
        purchased: ["Stick", "Blade"],
    },
    {
        id: 003,
        f_name: "Dianna",
        l_name: "Cherry",
        gender: "F",
        married: true,
        age: 22,
        expense: 1500,
        purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
        id: 004,
        f_name: "Dev",
        l_name: "Currian",
        gender: "M",
        married: true,
        age: 82,
        expense: 90,
        purchased: ["Book"],
    },
    {
        id: 005,
        f_name: "Maria",
        l_name: "Gomes",
        gender: "F",
        married: false,
        age: 7,
        expense: 300,
        purchased: ["Toys"],
    },
];
 const customersWithFullName = customers.map((customer)=>{
    let title ="";
    if(customer.gender==="M"){
        title = "Mr.";
    }
    else if(customer.gender==="F" && customer.married === true){
          title = "Mrs.";
    }
    else{
        title ="Miss";
    }
    customer["fullname"] =`${title} ${customer.f_name} ${customer.l_name}`
    return customer ;
 })
 console.log(customersWithFullName);









