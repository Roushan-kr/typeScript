"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eg of implementing interface
class yt {
    constructor(cameraMode, filter, brustMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brustMode = brustMode;
    }
}
// here we have to atlest implement all interFace Propos
class fb {
    constructor(cameraMode, filter, brustMode, uName, // extra
    mobileNo) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brustMode = brustMode;
        this.uName = uName;
        this.mobileNo = mobileNo;
    }
}
// here it have to implement all interface reqirement with its props/function redefination
class Ig {
    constructor(cameraMode, filter, brustMode, sName) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brustMode = brustMode;
        this.sName = sName;
    }
    createStory() {
        console.log("created");
    }
}
