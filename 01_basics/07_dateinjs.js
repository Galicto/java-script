// dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.getFullYear());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2025, 0 , 17)
//console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date (2025 , 3 , 11 , 8, 55)
console.log(myCreatedDate.toLocaleString());


let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime);
// console.log(Math.floor(Date.now()/1000));

// newDate.toLocaleString('default',{
//     weekday: "long"
// })

const newDate = new Date();

console.log(newDate.toLocaleString('default', { weekday: "long" }));




