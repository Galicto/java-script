// var c = 300
let a = 1000

if (true) {
    let a = 200
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    

}

// console.log(a);
// console.log(b);
// console.log(a);

// jitni baar curly barses ayega utni baar scope ayega.


function one(){
    const userName = "Raj"

    function two(){
        const webSite = "Youtube"
        console.log(userName);
        
    }
    // console.log(webSite);

    // two()
    
}

// one()

if (true) {
    const userName = "Raj"
    if (userName === "Raj" ) {
        const webSite = " Youtube"
        // console.log(userName+webSite);
    }
}


// +++++++++++++intresting++++++++++++++++++++


function addone (num){
    return num + 1
}

console.log(addone(9));


const addTwo = function(num){
    return num + 2
}

addTwo(5)