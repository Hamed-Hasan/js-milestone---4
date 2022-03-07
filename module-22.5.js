var string = "allahhuakbar";
var number = 292;
var boolean = true;

// variable let const change or not number-2
let change = 39;
const noCahnge = 93;

// noCahnge = 49;
// console.log(change)

// simple math operation number-3
var a = 4;
var b = 5;
var z = a / b;
// console.log(z)

// comparison number-5
var big = 40;
var sm = 10;
// var result =( big < sm) ? "big is big" : "sm is big";
// console.log((big < 100 || sm == big ))

// fullfil both conditions number-5
var bigger = 30;
var smaller = 30;
if (bigger === smaller && bigger != "string") {
    // console.log("not equal")
}else if (bigger == smaller) {
    // console.log("bigger is big")
}else if (bigger <= smaller) {
    // console.logs("smaller is small")
}else if (bigger == smaller) {
    // console.log("is true")
}else{
    // console.log("anything wrong")
}

var red = 100;
if (red != 10) {
    // console.log('true')
}else{
    // console.log('false')
}

// while loop odd numbers 
var number = 5;
while(number <= 18){
    number = number + 2;
    // console.log(number)

}
// array change add remove 
var arr = [21,31,53,49];
arr[1] = 100
arr.push(200)
arr.push(400)
arr.pop()
// console.log(arr)

var arr = [21,31,53,49,200,34,444];
for(i = 0;i < arr.length;i++){
    
}
// console.log(arr)
function largestOfFour(arr) {
    var firstNumber = [0,0,0,0];
    for(var aIndex = 0; aIndex < arr.length; aIndex++) {
     for(var aDown = 0; aDown < arr[aIndex].length; aDown++) {
        if(arr[aIndex][aDown] > firstNumber[aIndex]) {         
           firstNumber[aIndex] = arr[aIndex][aDown];
         }
     }
  }
  return firstNumber;
 }
 var result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result)

// multiply three number with function 
function toInteger(one,tow,three){
    var result = (one * tow) * three;
    return result
}
var res = toInteger(3,4,5);
// console.log(res)

// object value change 
var object = {
    fname:"hamed",
    lname:"hasan"
}
object.fname = "rifa"
// console.log(object)

// feet to inches
function toInches(feet){
    let inches = feet * 12
    return inches;
}

// var myFeet = 1;
var feet = toInches(2);
// console.log(feet)

// centimeter to meter 

function centimeterToMeter(centimeter){
    var meter = centimeter / 100;
    return meter
}
var result = centimeterToMeter(5000);
// console.log(result)


function paperRequirements(book1,book2,book3){
    var bookResult = (book1 + book2) + book3;
    return bookResult
}
var result = paperRequirements(100,200,300);
// console.log(result)

// find largest name by into function 
function bestFriend(arr){
var max = arr[0].length;
arr.map(v => max = Math.max(max, v.length));
result = arr.filter(v => v.length == max);
return result
}
  var result = bestFriend(["hamed","sayed","arif","borhanuddin","wahed","mojid"])
//   console.log(result)


// i did'dnt 
var numArr = [30,39,80,32,79,9,47];

let addArr = [0]
for(const positive of numArr){
// console.log(positive)
if (positive % 2 === 1) {
    continue;
   
}
}

// get positive number from array with function 
function onlyPositiveValue(allNum){
    let positiveArray = [];
   for(const item of allNum){
       if (item>=1) {
           positiveArray.push(item);
       }else{
           return positiveArray
       }
   }
   return positiveArray;
} 
let arrDeclare = [28,53,0,-9,24,100,546];
const output = onlyPositiveValue(arrDeclare);
console.log(output)