let score: number | boolean = 45
score =false

type User ={
    name: string
    email: string
}

type Admin ={
    uName: string
    email: string
}

let rj: User | Admin ={name :"rj", email:"rj@rjdev.com", uName:""};
// let rj: User | Admin ={name :"rj", email:"rj@rjdev.com"} // more formal

function dbClientReq(id: number | string){
    console.log(`db id: ${id}`);
    // not able to use it 
    // id.toUpperCase() // props which true for only one
    // for this
    if(typeof id =="number"){
        id.toString()
    }else(
        id.toLowerCase()
    )
}
 

// array 
const d1: number[]=[1,2,3]
const d2: string[]=["1","2","3"]
const d3: number[] | string[] =[1,2,3] // either number or string 
const d4: (number | string)[] =[1,2,"2"] // either number or string 

// some strict assgnment 
let pi:3.14 =3.14
// pi= 25 // not allowed 

// usecase
let setAllocatement :"aisle" | "middle"| "window"

setAllocatement = "aisle"
setAllocatement = "middle"
// setAllocatement = "crew" // not allowed 

