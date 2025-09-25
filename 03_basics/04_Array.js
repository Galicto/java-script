const user = {
    userName: "Raj",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
        
    }

}


// user.welcomeMessage()
// user.userName = "nayna"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     console.log(this.userName);
    
// }

// chai()


// const chai =()=>{
//     console.log(this.undefined);
// }
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(5,4));


const addTwo = (num1 , num2) => ( num1 + num2 )

console.log(addTwo(5, 4))

// const myArray = [2,3,4,45,66]

// myArray.forEach(()=>{})