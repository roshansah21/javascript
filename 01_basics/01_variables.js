const accountId = 12345
let accountEmail = "roshan@gmail.com"
var accountPassword = "54321"
accountCity = "kathmandu"
let accountState;  // undefined

// accountId = 60  not allowed to change

accountEmail = "rosan@gmail.com"
accountPassword = "52134"
accountCity = "Janakpur"


/*

now let are using, prefer not to use var
becoz of issue in block scope and functional scope

{

}


*/


console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])