var nums = [1,2,3,4,5,6,7,21];
var minNumber;
var maxNumber;

minNumber = maxNumber = nums[0];
for(let i = 1; i < nums.length; i++){
    if(maxNumber < nums[i]){
        maxNumber = nums[i];}
    }

for(let i = 0; i < nums.length; i++){
    if(minNumber > nums[i]){
        minNumber = nums[i];}
    }

console.log("The Smallest Number is: " + minNumber);
console.log("The Biggest Number is: " + maxNumber);
console.log("The difference between min and max number is: " + (maxNumber - minNumber));