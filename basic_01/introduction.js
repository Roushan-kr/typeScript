// typeScript is more ablur type Sefty not adding extra compared to js 
/*
ts doesnot allow to do
1. 2 +"2" -> 22
2. null + 2 -> 2
3 undefuned + 2 -> NaN
and many more yype issue
*/
// ts job -> static checking (checked at parsing or writing, where js check at runtime )
// even ts sugest some changes but it still posibale to parse it as js 
let user = { name: "roushan", email: "dev.roushancse@gmail.com" };
console.log(user.name);
// it act as a devm tools for shiping js in codebase 
