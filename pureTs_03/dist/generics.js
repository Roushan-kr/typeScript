"use strict";
// generics is not that what to stroge it about how to use that
const score = [];
const names = [];
function indentyOne(val) {
    // fro implementing a specifc interface method related to specifc dataSet
    // we have first to filter it
    return val;
}
function indentyTwo(val) {
    // here we just ignored the the type of data coming
    // defination and type are gone this way
    return val;
}
function indentyThree(val) {
    // this function tend to lock that that input dataSet and it Props througout this fn
    return val;
}
// another way to represent
function indentyFour(val) {
    return val;
}
indentyThree(4); // detuct and hold that data props
indentyThree("4");
// our coustm type
indentyFour({ brand: "", size: 5 });
// array
function indentyFive(val) {
    // able to perforem operation based on array not on basic of that dataset
    let len = val.length;
    return val;
}
// another eg
function getProductList(products) {
    // here i am returning one of the element from that data set
    // but in identyFive we are returning a array of that kind
    return products[1];
}
// for arrow fn
const getProductSearchIndex = (productList) => {
    return productList[5];
};
// another Way  // to show it a generics rither a tag in some compent lib loke jsx
const getProductSearchIndex2 = (productList) => {
    return productList[5];
};
// using type perimeter in generric constraints
// in this we have to use that exact dataSet and their object.haveOwnProps() and may it proptype props
// need exact or looked like that
// using it extra params
const anotherFn = (val1, vla2) => {
    return {
        vla2,
        val1,
    };
};
anotherFn(3, "5");
// now restring some args data provider U to be a type number or simlear with other dataMember
const anotherFn2 = (val1, vla2, vlss) => {
    return {
        vla2,
        val1,
    };
};
anotherFn2("5", 7, "");
const anotherFn3 = (val1, vla2) => {
    return {
        vla2,
        val1,
    };
};
const another4 = (va) => {
    //old way
};
anotherFn3("ren", { connection: "", uNmae: "", passwd: "" });
class Sallable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const obj = new Sallable();
obj.addToCart({ auther: "", name: "", subject: "" });
console.log(obj.cart);
const obj1 = new Sallable();
obj1.addToCart({ topic: "", duration: 5 });
console.log(obj1.cart);
