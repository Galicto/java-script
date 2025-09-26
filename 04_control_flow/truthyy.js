const userEmail = ""

if (userEmail) {
    console.log("user Email is");
    
} else {
    console.log("useremail not found");
    
}

// Falsy values

// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN

// Everything else is truthy
// "0" "false" [] {} function(){}
// " "  - space
// "Raj"
// 3.14
// -3.14
// Infinity
// -Infinity


// if (userEmail.length === 0) {

//     console.log("array is empty");
// }


// ++++++++++++++++++nullish coalescing operator +++++++++++++++++++++++

let val1;
// val1 = 10 ?? 30

val1 = null ?? 30

console.log(val1);

// +++++++++++++++++ternary operator +++++++++++++++++++++++

iceTeaPrice = iceTeaPrice < 50 ? console.log("price is less") : console.log("price is more");
// Example ternary usage
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice < 50 ? console.log("price is less") : console.log("price is more");


