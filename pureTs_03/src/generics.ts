// generics is not that what to stroge it about how to use that

const score: Array<number> = [];
const names: Array<string> = [];

function indentyOne(val: boolean | number): boolean | number {
  // fro implementing a specifc interface method related to specifc dataSet
  // we have first to filter it
  return val;
}

function indentyTwo(val: any): any {
  // here we just ignored the the type of data coming
  // defination and type are gone this way
  return val;
}
function indentyThree<Type>(val: Type): Type {
  // this function tend to lock that that input dataSet and it Props througout this fn
  return val;
}

// another way to represent
function indentyFour<T>(val: T): T {
  return val;
}
indentyThree(4); // detuct and hold that data props
indentyThree("4");

// for using our coustm dataset
interface Bottel {
  brand: string;
  size: number;
}
// our coustm type
indentyFour<Bottel>({ brand: "", size: 5 });

// array
function indentyFive<T>(val: T[]): T[] {
  // able to perforem operation based on array not on basic of that dataset
  let len = val.length;
  return val;
}
// another eg
function getProductList<T>(products: T[]): T {
  // here i am returning one of the element from that data set
  // but in identyFive we are returning a array of that kind

  return products[1];
}

// for arrow fn
const getProductSearchIndex = <T>(productList: T[]): T => {
  return productList[5];
};
// another Way  // to show it a generics rither a tag in some compent lib loke jsx
const getProductSearchIndex2 = <T,>(productList: T[]): T => {
  return productList[5];
};

// using type perimeter in generric constraints
// in this we have to use that exact dataSet and their object.haveOwnProps() and may it proptype props
// need exact or looked like that

// using it extra params
const anotherFn = <T, U>(val1: T, vla2: U): object => {
  return {
    vla2,
    val1,
  };
};
anotherFn(3, "5");

// now restring some args data provider U to be a type number or simlear with other dataMember
const anotherFn2 = <T, U extends number>(
  val1: T,
  vla2: U,
  vlss: string
): object => {
  return {
    vla2,
    val1,
  };
};
anotherFn2("5", 7, "");

interface Database {
  connection: string;
  uNmae: string;
  passwd: string;
}
const anotherFn3 = <T, U extends Database>(val1: T, vla2: U): object => {
  return {
    vla2,
    val1,
  };
};
const another4 = (va: Database) => {
  //old way
};
anotherFn3("ren", { connection: "", uNmae: "", passwd: "" });

// some more way to use it
interface Quize {
  topic: string;
  duration: number;
}
interface Cource {
  auther: string;
  name: string;
  subject: string;
}

class Sallable<T> {
  cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}

const obj = new Sallable<Cource>();
obj.addToCart({ auther: "", name: "", subject: "" });
console.log(obj.cart);

const obj1 = new Sallable<Quize>();
obj1.addToCart({ topic: "", duration: 5 });
console.log(obj1.cart);
