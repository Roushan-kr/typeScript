// getting data in presised manner (order importent)

let userDate :[number , string, boolean]
userDate= [1,"",true]
// userDate=[465.645, 45 ,156] // not allowed 


const rgb:[number, number, number] =[254,235,125] // no extra elem allowed 

type User =[number, string]

const usr: User =[1,"dd@dec.com"]
// but here it may changed 
usr[1]="dknf@gmail.com" // able to change value(issue) not type 
usr.push(15) // now issue fixed but still able to assign more value to it of provided kind // vid.pause(2.13)
console.log(usr);


// for temparary solving this 
type User1 = readonly [number, string] 
const user: User1 =[1,"dfjhhd"]
// user[1]= "1531" // now this res error
// user.push(45) // this also not work
let us:User1 =[1,"fg"]
// us[0]= 1 // it also not able edit 
export {}