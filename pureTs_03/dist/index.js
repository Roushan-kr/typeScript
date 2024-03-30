"use strict";
var _User_isAdmin;
console.log("hello from ts");
class User {
    constructor(email, name) {
        _User_isAdmin.set(this, false); // another kind of private variable
        this.city = "";
        // private identifer is not used as args #dbid:number
        this.dbId = Math.random();
        this.email = email;
        this.name = name;
    }
}
_User_isAdmin = new WeakMap();
// another way
class user2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "dbg";
        // private _courceCount:number
        this._courceCount = 0;
        // making fn private
        this.delateToken = (t) => {
            if (t)
                return true;
            return false;
        };
    }
    // making a geter
    get getAppleEmail() {
        let email = this.email.split("@")[0];
        return `${email}@applemail.com`;
    }
    get courceCount() {
        return this._courceCount;
    }
    set courceCount(n) {
        // seter can't have a return dataType
        if (n > 0)
            this._courceCount = n;
    }
}
// extending class
class SubUser extends user2 {
    set setVCourceCount(n) {
        if (n > 0)
            this.vocationalCourceCount = n;
    }
}
const user = new User("rj@rjdev.com", "roushan");
user.city = "patna";
// user.email =" " // it can be resited by using ts.config
