// singleton


// object literal

const mySym = Symbol("Key1")

const JsUser = {
    name: "Raj",
    "full name": "Raj Aryan",
    [mySym]: "mykey1",
    location: "Jaipur",
    age: 20,
    email: "patna@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym]);


JsUser.email = "raj@2134"
Object.freeze(JsUser)
JsUser.email = "etiqwudih@hwg"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("hello js user");
    
}

console.log(JsUser.greetings);




