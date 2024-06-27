/* enter your fullname and create your username using @fullnamelenght 
ex. @ajaypatil19 (string concation)*/

let str= prompt("Enter your full name:");
console.log("FullName=",str);
let str1="@"+str+str.length;
console.log("userName=",str1);