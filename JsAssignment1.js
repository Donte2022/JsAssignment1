
const inch = 1;
//Finds inches per Foot
const InchPerFoot = inch*12;
//Finds Foot per Yard
const FootPerYard = InchPerFoot*3;
//Finds Yard per Mile
const YardPerMile = 1760;
//Convert Yards per Mile into Inches per Mile
const YardtoFeet = YardPerMile*3;
//Jane's current distance on trail
let Jane = 3;
//John's current distance on trail
let John = 8;
//Finds distance from John to Jane
let milestoJohn = John-Jane;
//Breaks down distance from John to Jane into inches
const x = milestoJohn*YardtoFeet;

console.log("Jane is " + x + " inches from John!")

document.getElementById("output01").innerHTML =
    "Jane is " + x + " inches from John!";

