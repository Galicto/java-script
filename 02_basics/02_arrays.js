const marvel_heros = ["thor", "ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);

// marvel_heros.concat(dc)
// console.log(marvel_heros);

const all_newHeros = [...marvel_heros,...dc]
console.log(all_newHeros);

const another_array = [1,2,3,[4,5,6],7[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



Array.isArray("Raj")
console.log(Array.from("Raj"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

