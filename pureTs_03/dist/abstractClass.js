"use strict";
// abstract base class as blueprint 
class TakePhoto {
    constructor(CamMode, filter, test) {
        this.CamMode = CamMode;
        this.filter = filter;
    }
    // function with implementation with defination
    takePic() {
        // it can be overWirten in extended class
        console.log("cam started");
    }
}
class ig extends TakePhoto {
    constructor(CamMode, filter, brust = 1) {
        super(CamMode, filter, "");
        this.CamMode = CamMode;
        this.filter = filter;
        this.brust = brust;
    }
    fn() {
        this.takePic();
    }
    // work same 
    // fn(){ 
    //     this.takePic()
    // }
    fn2() {
        console.log("somting");
    }
}
// const rj =new TakePhoto("test", "test") // not allowd to implent direct object from that
const rj = new ig("test", "test");
