const accountId=123456
let accountEmail="adb@gmail.com"
var accoutnPassword="1234"
accountCity="dhanbad"
let accountState;

console.log(accountId);
console.log(accountEmail);
console.log(accoutnPassword);
console.log(accountCity);
console.table([accountId,accountEmail,accoutnPassword,accountCity,accountState])
// accountId=12345 
// that means we can't change the const 
accountEmail="abcd@gamil.com"
accoutnPassword="234"
accountCity="patna"

console.log(accountId);
console.log(accountEmail);
console.log(accoutnPassword);
console.log(accountCity);
// if you dont wannt write all of these lines just use console.table 
console.table([accountId,accountEmail,accoutnPassword,accountCity,accountState])
// this means rest all of the types can be changed except const
/*
so in the end we will use const and let 
we dont use var bcz of scope problem
if we dont give M=am=nt variable any data type it will self assine it 
but it is not recomended 
if we just declear the variable and dont assine any value then it is undefined 
if we have to print any long list use console.table insted of writing condole.log multiple times  
*/


