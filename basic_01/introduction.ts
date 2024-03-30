// typeScript is more about type Sefty not adding much extra compared to js 

/*
ts doesnot allow to do 
1. 2 +"2" -> 22
2. null + 2 -> 2
3 undefined + 2 -> NaN
and many more type issue 
*/

// ts job -> static checking (checked at parsing or writing, where js check at runtime )
// even ts sugest some changes but it still possible to parse it as js 
// it act as a devm tools for shiping js in codebase 

let user ={ name:"roushan", email:"dev.roushancse@gmail.com"}
console.log(user.name);

// primite datType : Number , String, boolean 
// other: null, undefined , object, void, Array, Tuples ...

// stituation to use it 
// 1. when input args have dataType
// 2. when func return/need spefic dataType 
// 3.  when typeSefty is nessary 
// 4. when order is nessary (tuples)


// typescript also take care that prev var not assign futher another dataType/value
