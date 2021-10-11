var number1 = 1;
var number2 = 2;
var number3 = 2;

if(number1 == number2 && number2 == number3){
     console.log("3 same numbers");
}
else if(number1 == number2 || number1 == number3 || number2 == number3){
    console.log("2 same numbers");
}
else{
    console.log("0 same numbers");
}
