// if

// const isUserLoggedIn = true
// const temprature = 24

// if (temprature < 30){

//     console.log("tempratre is less then 30");

// } else {
//     console.log("temprate is greater than 30");
// }

// console.log("executed");


// < , > , <= , >= ,== ,!= ,====, !==

// const score = 200

// if (score > 100) {
//     const power = "flyyy"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`);


// const balance = 100000

// // if (balance > 5000) console.log("test");

// if (balance < 5000) {

//     console.log("less than");
    
    
// } else if (balance<7500) {

//     console.log("less than 750");
    
// } else if (balance < 9000) {

//     console.log("less then 9000");
    
    
//  } else{
//     console.log("less than 1200000");
    
//  }



const UserLoggedIn = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (UserLoggedIn && debitcard) {
    console.log("allow to buy the course");
}

if (loggedinfromgoogle || loggedinfromemail) {
    console.log("user logger in");
    
}