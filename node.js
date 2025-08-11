// Example using let and const

// const → value change nahi hoti
const appName = "My JavaScript App";
console.log("App Name:", appName);

// let → value change ho sakti hai
let counter = 0;
console.log("Counter start:", counter);

// Counter ko update karna
counter = counter + 1;
console.log("Counter after increment:", counter);

// const array ka example (array ka reference fix hota hai, lekin data change ho sakta hai)
const fruits = ["Apple", "Banana"];
console.log("Fruits:", fruits);

// Array me naya fruit add karna
fruits.push("Mango");
console.log("Fruits after push:", fruits);

// const object ka example
const user = {
    name: "Pratik",
    age: 22
};
console.log("User:", user);

// Object ke property change kar sakte ho
user.age = 23;
console.log("User after age update:", user);
