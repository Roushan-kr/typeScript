// abstract base class as blueprint 

abstract class TakePhoto {
    constructor(public CamMode:string, public filter:string, test:string) {
        
    }
    // function with implementation with defination
    takePic():void{
        // it can be overWirten in extended class
        console.log("cam started");
    }
    // function with no defination 
    abstract fn2():void
}


class ig extends TakePhoto{
    constructor(public CamMode:string, public filter:string, public brust:number=1) {
       super(CamMode, filter,"") 
    }
    fn():void{
        this.takePic()
    }
    // work same 
    // fn(){ 
    //     this.takePic()
    // }
    fn2():void{
        console.log("somting");
    }
}

// const rj =new TakePhoto("test", "test") // not allowd to implent direct object from that
const rj =new ig("test", "test")