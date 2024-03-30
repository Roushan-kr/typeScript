"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var var1 = "some rendom value";
console.log(var1);
// var1 =15; // it suggest to say issue bit not resist to transple it
// temp relife from Cannot redeclare block-scoped variable 'var1'.ts(2451)
var1.toLocaleLowerCase();
var num = 6;
// num ="hari"; // it not suggested 
var num2 = 15;
console.log(String(num2));
var isLogin = true;
//  above case are to obous to ts autodecut, so sometime it not use like this way
// instide it use like this 
var num3 = 15;
var isLogout = false; // lagemente usecase 
var StrValue = "some string";
// any 
var rendomVaribale;
function getRendomValue() {
    return "rendom str";
}
rendomVaribale = getRendomValue(); // it become a type any interface
// so for thise kind of senario use 
var rendomVaribale1;
rendomVaribale1 = getRendomValue();
console.log(rendomVaribale, rendomVaribale1);
