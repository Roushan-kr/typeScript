console.log("hello from ts");

class User {
  // default rage is public
  private dbId: number;
  #isAdmin: boolean = false; // another kind of private variable
  readonly email: string;
  name: string;
  city: string = "";

  constructor(email: string, name: string) {
    // private identifer is not used as args #dbid:number
    this.dbId = Math.random();
    this.email = email;
    this.name = name;
  }
}

// another way

class user2 {
  readonly city = "dbg";
  // private _courceCount:number
  private _courceCount = 0;
  protected vocationalCourceCount: number;
  constructor(private email: string, public name: string) {}
  // making a geter
  get getAppleEmail(): string {
    let email = this.email.split("@")[0];
    return `${email}@applemail.com`;
  }
  get courceCount(): number {
    return this._courceCount;
  }

  set courceCount(n: number) {
    // seter can't have a return dataType

    if (n > 0) this._courceCount = n;
  }
  // making fn private
  private delateToken = (t: string): boolean => {
    if (t) return true;
    return false;
  };
}

// extending class

class SubUser extends user2 {
  havePlan: "Free" | "Family";
  set setVCourceCount(n: number) {
    if (n > 0) this.vocationalCourceCount = n;
  }
}

const user = new User("rj@rjdev.com", "roushan");
user.city = "patna";
// user.email =" " // it can be resited by using ts.config
