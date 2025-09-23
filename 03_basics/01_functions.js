// console.log("H");
// console.log("e");
// console.log("l");
// console.log("l");
// console.log("o");

function sayHello() {
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// sayHello

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // console.log("raj");
    
    return num1 + num2;
}

const result = addTwoNumbers(4, null);

// console.log("result", result);

function loginUserMessage(userName){
    if(!userName){
        console.log("please enter valid username");
    return;  }
    return `${userName} just logged in`;    
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());
    
console.log(loginUserMessage());


