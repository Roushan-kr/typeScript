const user = {
  name: "roushan",
  isActive: false,
};
// object at fn perimeter
function createUser({ name: string, ispaid: boolean }) {}

createUser({ name: "ros", ispaid: false });

// retuening a object from a function 
function createAdmin({ name: string, ispaid: boolean }):{} {
    // empty obj able to return some key/value not non epty not 
    return {}
}
function createAdmin1({ name: string, ispaid: boolean }):{name:string} {
    // empty obj able to return some key/value not non epty not 
    return {name:""}
}
// tking default/optional parameter 
function createAdmin2({ name: string, ispaid: boolean= false }):{name:string} {
    // empty obj able to return some key/value not non epty not 
    return {name:""}
}

createAdmin({name:"rj",ispaid:false})
createAdmin2({name:"rj"}) // optional args

// passing extra value to function 
const newUser = {name:"rj",ispaid:false, email:"rj@rjdev.com"}
createAdmin(newUser)


// type aliase
type User1 ={
    name: string;
    isActive: boolean;
    isPaid: boolean;
}

// now using this interface user1
function crtUser(user:User1){
    console.log(user);
    
}

crtUser({name:"rj",isActive:false,isPaid:true})


// using readonly keyword to make datamember readonly 
type User2 ={
    readonly _id: string;
    name: string;
    email: string;
    readonly artibute: Array<number | string>;
    cardDetail?: number; // optional parameter 

}
const user2: User2={_id:"15236", name:"", email:"", artibute:[1,"rj"]}
const user3: User2={_id:"15236", name:"", email:"", artibute:[1,"rj"], cardDetail:153415}
// user2._id ="15616" // not able to resign it 
user2.artibute.push("15")
// user2.artibute =[] // not allowed 
console.log(user2, user3);



// ceateing a custom type interface

type cardNumber={
    cardNumber : number
}
type cardDate ={
    cardDate: string;
}
// creating a new type based on existing type
type cardDetail = cardNumber & cardDate & {
    cardCVV : number
}

const visa123: cardDetail ={cardNumber:155115, cardDate:"15/1/15", cardCVV:151}

export {}