var word = "ahoj";
var palindrome = word.split("").reverse().join("");
if(palindrome === word){
    console.log("Is Palindrome");
}
else {
    console.log("Is not Palindrome");
}
