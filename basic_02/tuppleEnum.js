"use strict";
// getting data in presised manner (order inportent)
Object.defineProperty(exports, "__esModule", { value: true });
var userDate;
userDate = [1, "", true];
// userDate=[465.645, 45 ,156] // not allowed 
var rgb = [254, 235, 125]; // no extra elem allowed 
var usr = [1, "dd@dec.com"];
// but here it may changed 
usr[1] = "dknf@gmail.com"; // able to change value(issue) not type 
usr.push(15); // now issue fixed but still able to assign more value to it of provided kind // vid.pause(2.13)
console.log(usr);
