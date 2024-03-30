"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// in case of funciton any is more porn to issue
function addTwo(num) {
  // num.toUpperCase() // use not allowed
  return num + 2;
}
console.log(addTwo(5));
// sample function
function userDetail(name, email, isAdmin) {
  return "The person with "
    .concat(name, " and ")
    .concat(email, " is ")
    .concat(isAdmin ? "able" : "not able", " to acess this");
}
// here i have to pass all the args
userDetail("roushan", "dec@rjdev.com", true);
// for ignoring one args we have to put defaulr parimater to it
function userDetail1(name, email, isAdmin) {
  if (isAdmin === void 0) {
    isAdmin = false;
  }
  return "The person with "
    .concat(name, " and ")
    .concat(email, " is ")
    .concat(isAdmin ? "able" : "not able", " to acess this");
}
userDetail1("roushan", "dec@rjdev.com");
// restricting a function to return specific dataType
function userDetail2(name, email, isAdmin) {
  if (isAdmin === void 0) {
    isAdmin = false;
  }
  return "The person with "
    .concat(name, " and ")
    .concat(email, " is ")
    .concat(isAdmin ? "able" : "not able", " to acess this");
}
userDetail2("roushan", "dec@rjdev.com");
// restricting a function to return some dataType
function userDetail3(name, email, isAdmin) {
  if (isAdmin === void 0) {
    isAdmin = false;
  }
  return isAdmin
    ? "The person with "
        .concat(name, " and ")
        .concat(email, " able to acess this")
    : false;
}
userDetail3("roushan", "dec@rjdev.com");
// for arrow func
var gethallo = function (n) {
  return n ? "hi ".concat(n) : 0;
};
// const name =["rj", "sk", "dk"]
// const name =[1,2,3]
var name = [1, 2, 3, "rj"];
// it auto detuct which kind of value provided
var a = name.map(function (n) {
  console.log(n);
  return n;
});
console.log(a);
