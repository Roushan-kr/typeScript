var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["asile"] = 0] = "asile";
    seatChoice[seatChoice["middle"] = 5] = "middle";
    seatChoice[seatChoice["window"] = 6] = "window"; // 0,5,6 // def 0,1,2
    // asile, middle=5, window=""  // 0,5,"" // def 0,1,2
})(seatChoice || (seatChoice = {}));
// able to put diffrent dataType reletion
var rjSeat = seatChoice.window;
// able to put diffrent dataType reletion
var rjSeat1 = seatChoice.window;
