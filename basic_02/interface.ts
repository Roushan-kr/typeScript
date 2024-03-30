// reponng of this happend called as interface opening
// mostly used when some kind of interactive object session used (lose form of class)
interface User {
  readonly dbId: number;
  email: string;
  createdAt?: string;
  isAdmin: boolean;
  isUTrial: () => boolean;
  checkPaymentName(dbid: number): string; // another way and futher, user able to change args name
//   but not its dataType and need to explicitly specify no of args 
}
// interface repoping 
interface User {
  extraArt: boolean;
}

const user: User = {
  dbId: 155,
  email: "",
  isAdmin: false,
  isUTrial: () => {
    return true;
  },    
  extraArt: false,
  checkPaymentName: (dbId: number) => {
    return "";
  },
};


// reponing of this not allowed
type User1 = {
  dbId: number;
  name: string;
  createdAt?: string;
  isAdmin: boolean;
  isUTrial: () => boolean;
  checkPaymentName(): string;
};


// extending interface (like inhertitance)
interface Admin extends User {
    uName :string;
    createdAt: string;
    role: "amdin" | "ta" | "maneger"
    
}

interface Admin2 extends User1 {
    uName :string;
    createdAt: string; // now it take refrece of prevDecleared 

}

interface ANotherIntf {}
interface Admin3 extends User1, ANotherIntf {
    uName :string;
    createdAt: string; // now it take refrece of prevDecleared 

}

const admin:Admin2={dbId:484,uName:"RJ", createdAt:"15/1/2022", name:"",isAdmin:true,isUTrial:()=>{return true} , checkPaymentName:()=>""}

const admin1:Admin={dbId:484,email: "",uName:"RJ", createdAt:"15/1/2022",isAdmin:true,isUTrial:()=>{return true} , checkPaymentName:()=>"",role:"amdin", extraArt:false}

export {};
