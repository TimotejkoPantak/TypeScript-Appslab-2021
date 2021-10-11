var side1 = 5;
var side2 = 14;
var side3 = 76;


if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
    console.log("Trojuholnik sa neda zostrojit");
}
else {
    console.log("Trojuholnik sa da zostrojit");
}