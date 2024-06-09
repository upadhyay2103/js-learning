const accountId=122341;
let accountEmail="aryan@gmail.com";
var accountPassword="12345";
accountCity="Rudrapur";

// accountId=12; //this is not allowed

accountEmail="abababab";
accountPassword="134752";
accountCity="Delhi";

/*
prefer to use let instead of var
becuase var has issues reklated to block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);