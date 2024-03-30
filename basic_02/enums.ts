enum seatChoice {
    asile, middle=5, window  // 0,5,6 // def 0,1,2
    // asile, middle=5, window=""  // 0,5,"" // def 0,1,2
}
// able to put diffrent dataType reletion
const rjSeat = seatChoice.window
// the above one generate too many code 


const enum seatChoice2 {
    asile, middle=5, window  // 0,5,6 // def 0,1,2
    // asile, middle=5, window=""  // 0,5,"" // def 0,1,2
}
// able to put diffrent dataType reletion
const rjSeat1 = seatChoice.window



export {}