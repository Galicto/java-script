const name = "Raj"
const repoCount = 100

//console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo count is $ {repoCount}`);

const gameName = new String('Raj Aryan')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());


const newString = gameName.substring(0,4)
console.log(newString);

//const anotherString = gameName.slice(-8,4)
//console.log(anotherString);

const anotherString = gameName.slice(-3,1)
console.log(anotherString);


// trim aage Nd piche ka space clear kar deeta h

const url = "https://rajaryan%89aryan"

console.log(url.replace('%89','77'));

// url ke andar replace kiya h cheezo ko

// include use karte h check karne ke liye ki kuch h nhi cheez sentance m

// split use karte h kisi bhi cheez ke basis pe split karta h sentance ko ie: - /
