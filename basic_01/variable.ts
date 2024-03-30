const var1: string = "some rendom value";
console.log(var1);

// var1 =15; // it suggest to say issue but not resist to transple it
// temp relif to Cannot redeclare block-scoped variable 'var1'.ts(2451) use exp{}

var1.toLocaleLowerCase();
let num = 6;

// num ="hari"; // it not allowed by ts 

let num2: number = 15

console.log(String(num2));

let isLogin:boolean = true
//  above case are to obous to ts autodet, so sometime it not use like this way
// instid it use like this 
let num3 =15;
let isLogout =false // lagemente usecase 
let StrValue ="some string"


// any - turn off type checking for this (not a data type) 
// use flag noImpliciteAny to resist it 

let rendomVaribale;
function getRendomValue() {
    return "rendom str"
}

rendomVaribale = getRendomValue() // it become a type any interface

// so for thise kind of senario use 
let rendomVaribale1: string;
rendomVaribale1 =getRendomValue()

console.log(rendomVaribale,rendomVaribale1);


export {};
