// interface is not about defination about something rither
// it act as minimal to implement someThing like protocal
interface TakePhoto {
  cameraMode: "Rare" | "Back";
  filter: string;
  brustMode: number;
}

interface story {
    sName:string;
    createStory():void
}
// eg of implementing interface

class yt implements TakePhoto {
  constructor(
    public cameraMode: "Rare" | "Back",
    public filter: string,
    public brustMode: number
  ) {}
}

// here we have to atlest implement all interFace Propos

class fb implements TakePhoto {
    constructor(
        public cameraMode: "Rare" | "Back",
    public filter: string,
    public brustMode: number,
    public uName: string, // extra
    private mobileNo :number
  ) {}
}

// here it have to implement all interface reqirement with its props/function redefination
class Ig implements TakePhoto, story {
  constructor(
    public cameraMode: "Rare" | "Back",
    public filter: string,
    public brustMode: number,
    public sName: string
  ) {}
  createStory(): void {
      console.log("created");
      
  }
}


export {}