"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
  name: "roushan",
  isActive: false,
};
// object at fn perimeter
function createUser(_a) {
  var string = _a.name,
    boolean = _a.ispaid;
}
createUser({ name: "ros", ispaid: false });
// retuening a object from a function
function createAdmin(_a) {
  var string = _a.name,
    boolean = _a.ispaid;
  // empty obj able to return some key/value not non epty not
  return {};
}
function createAdmin1(_a) {
  var string = _a.name,
    boolean = _a.ispaid;
  // empty obj able to return some key/value not non epty not
  return { name: "" };
}
// tking optional parameter
function createAdmin2(_a) {
  var string = _a.name,
    _b = _a.ispaid,
    boolean = _b === void 0 ? false : _b;
  // empty obj able to return some key/value not non epty not
  return { name: "" };
}
createAdmin({ name: "rj", ispaid: false });
createAdmin2({ name: "rj" }); // optional args
// passing extra value to function
var newUser = { name: "rj", ispaid: false, email: "rj@rjdev.com" };
createAdmin(newUser);
// now using this interface user1
function crtUser(user) {
  console.log(user);
}
crtUser({ name: "rj", isActive: false, isPaid: true });
var user2 = { _id: "15236", name: "", email: "", artibute: [1, "rj"] };
var user3 = {
  _id: "15236",
  name: "",
  email: "",
  artibute: [1, "rj"],
  cardDetail: 153415,
};
// user2._id ="15616" // not able to resign it
user2.artibute.push("15");
// user2.artibute =[] // not allowed
console.log(user2, user3);
var visa123 = { cardNumber: 155115, cardDate: "115/15/15", cardCVV: 151 };
