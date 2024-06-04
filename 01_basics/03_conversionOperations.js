let marks = "95"

console.log(typeof marks);
console.log(typeof (marks));  // method

let valueInNumber = Number(marks)
console.log(typeof valueInNumber);

// "95" => 95
//"95abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Roshan"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
//"" => false
// "Roshan" => true


let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
console.log(typeof stringNumber);