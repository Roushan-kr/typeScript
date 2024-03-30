// in js object refer to array:any , null, return object as dataType

// type guard - just managing confilit with other dataType
// narrowing :-  just reducing the use of diffrent dataVariable with with respect to type sefty

function detuctType(value: string | number) {
  if (typeof value == "string") {
    return value.toLowerCase();
  }
  return value + 5;
}

function provideId(id: string | null) {
  if (!id) {
    // explicetly checking for null
    // typeof return object for this
    console.log("provide a id");
    return;
  }
  return id.toLowerCase();
}

// truthness checking in primitive can often be error porn
function printAll(val: string | string[] | null) {
  if (val) {
    if (typeof val === "object") {
      for (const c in val) {
        console.log(c);
      }
    } else if (typeof val === "string") {
      console.log(val);
    }
  }
}

// using in to determine the prop persent in specidfic field

interface User {
  uName: string;
  isLogin: boolean;
}

interface Admin {
  uName: string;
  havePrivillage: boolean;
  isLogin: boolean;
}

function checkProp(usr: User | Admin): string {
  if ("havePrivillage" in usr) {
    return "user Have Privillage";
  }
  return "have no acces";
}

checkProp({ uName: "", havePrivillage: true, isLogin: true });

// checking that is it of that instance (new keyword based obj)
function logValue(value: Date | string) {
  if (value instanceof Date) {
    return value.getUTCDate();
  } else {
    return value.toLocaleLowerCase();
  }
}

type Fish = { swim(): void };
type Bird = { fly(): void };

// this function is not clearing identifying it as fish interface return
// to do it chage
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

isFish({
  swim: () => {
    console.log("swim");
  },
});

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    // ts is not able to identify it as bird or fish cler
    // to do it insteed if returing it as T/F we return that interface
    pet;
    return "fish food";
  }
  pet;
  return "bird food";
}

// use of union is not good here
interface Shapes {
  kind: "Circle" | "Squre" | "Reactangle";
  radi?: number;
  length?: number;
  width?: number;
  side?: number;
}

function getTrueShape(shape: Shapes) {
  if (shape.kind === "Circle" && shape.radi) {
    return Math.PI * shape.radi ** 2;
  } else if (shape.kind === "Squre" && shape.side) {
    return shape.side ** 2;
  } else if (shape.kind === "Reactangle" && shape.length && shape.width) {
    return shape.length * shape.width;
  }
}

// use this like (imp)
interface Circle {
  kind: "Circle";
  radi: number;
}
interface Reactangle {
  kind: "Reactangle";
  length: number;
  width: number;
}
interface Squre {
  kind: "Squre";
  side: number;
}

type Shape = Circle | Squre |Reactangle

// this code fail if i introduce futher interface to shape
function getTrueShape1(shape:Shape) {
    if(shape.kind ==="Circle"){
        return Math.PI * shape.radi**2
    }
    // return shape.side * shape.side // bogus when Rectangle interface also in Type
}

// another way (never Type)
// more robust for futher upgreadation (think it like payment status)
function  getTrueShape12(shape:Shape) {
    switch(shape.kind){
        case "Circle":
            return Math.PI * shape.radi**2
        case "Squre":
            return shape.side * shape.side
        // implemented beacuse default 
        case "Reactangle":
            return shape.length * shape.width

        default:
            // this block check all implemented case are must to handeld
            const _defShapeReturn:never =shape
            return _defShapeReturn
            
    }
}

