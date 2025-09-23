const tinderUser = new Object()

tinderUser.id = "123abs"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "sonam@gmail.com",
    fullName: {
        userFullname:{
            firstName: "hitesh",
            lastName: "raj",
        }
    }
}
// // console.log(regularUser.fullName.userFullname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// Merging objects using spread operator
const Obj3 = {...obj1, ...obj2};
console.log(Obj3);

// Example users object
const users = {
    1: { email: "user1@example.com" },
    2: { email: "user2@example.com" }
};

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));



