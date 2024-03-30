// in case of funciton any is more porn to issue
function addTwo(num: number) {
  // num.toUpperCase() // use not allowed
  return num + 2;
}

console.log(addTwo(5));

// sample function
function userDetail(name: string, email: string, isAdmin: boolean) {
  return `The person with ${name} and ${email} is ${
    isAdmin ? "able" : "not able"
  } to acess this`;
}
// here i have to pass all the args
userDetail("roushan", "dec@rjdev.com", true);

// for ignoring one args we have to put defaulr parimater to it
function userDetail1(name: string, email: string, isAdmin: boolean = false) {
  return `The person with ${name} and ${email} is ${
    isAdmin ? "able" : "not able"
  } to acess this`;
}

userDetail1("roushan", "dec@rjdev.com");

// restricting a function to return specific dataType
function userDetail2(
  name: string,
  email: string,
  isAdmin: boolean = false
): string {
  return `The person with ${name} and ${email} is ${
    isAdmin ? "able" : "not able"
  } to acess this`;
}
userDetail2("roushan", "dec@rjdev.com");

// restricting a function to return certain dataType
function userDetail3(
  name: string,
  email: string,
  isAdmin: boolean = false
): string | boolean {
  return isAdmin
    ? `The person with ${name} and ${email} able to acess this`
    : false;
}
userDetail3("roushan", "dec@rjdev.com");

// for arrow func
const gethallo = (n: string): string | number => {
  return n ? `hi ${n}` : 0;
};

// intaligence -
// const name =["rj", "sk", "dk"]
// const name =[1,2,3]
const name = [1, 2, 3, "rj"];
// it auto detuct which kind of value provided
const a = name.map((n): string | number => {
  console.log(n);
  return n;
});
console.log(a);


// some function need not to return void (intisional crash or exit)
const handelError=(m:string):never=>{
    throw new Error(m)
}
handelError("Error 404")

export {};
