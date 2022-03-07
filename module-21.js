// class-1 not yet
// math using loop
// Math.(abs,round,ceil,floor,random,power)

var one1 = Math.abs('77');     // 1
var one2 = Math.abs(-7);       // 2
var one3 = Math.abs(null);     // 0
var one4 = Math.abs('');       // 0
var one5 = Math.abs([]);       // 0
var one6 = Math.abs([2]);      // 2
var one7 = Math.abs([1,2]);    // NaN
var one8 = Math.abs({});       // NaN
var one9 = Math.abs('string'); // NaN
var one10 = Math.abs();         // NaN
// console.log(one10)
var mathC = Math.ceil(1.2);
// console.log(mathC)
var mathR = Math.round(3.4);
// console.log(mathR)
var mathF = Math.floor(3.9);
// console.log(mathF)

// using loop math randon 
for(i = 0;i < 30; i++){
    var mathRm = Math.random() * 10;
    var mathfr = Math.round(mathRm)
    // console.log(mathfr)
}
var mathMx = Math.min(20,50,60,90);
// console.log(mathMx)

// learn youtube 
var mathPw = Math.pow(32,4);
// console.log(mathPw)

// class-2 yes yet
// swap variable 
// normal variable declare 
var first = 5;
var second = 7;
// console.log(first,second)


// console.log(first,second)

// swap variable declare 
/* var temp = first
first = second
second = temp */
// console.log(first,second)

// count swap variable declare 
[first,second] = [second,first];
// console.log(first,second)

// class-3 not yet
/* Find bigger and smaller numbers by 3 ways 
Find bigger and smaller numbers > math.max()
Find bigger and smaller numbers > if else   declare 3 variable
Find bigger and smaller numbers > function 3 parameter */

// Find bigger and smaller numbers > math.max()
var businessMen = 4;
var minister = 3;
var army = 6800;
var mathMx = Math.max(businessMen,minister,army);
// console.log(mathMx)

// Find bigger and smaller numbers > if else   declare 3 variable
var businessMen = 300;
var minister = 324;
var army = 6800;
if (businessMen > minister && businessMen > army) {
    // console.log("business is bigger")
    // return 1
}else if (minister > businessMen && minister > army) {
    // console.log("minister is bigger")
}else{
    // console.log("army is bigger")
}

// Find bigger and smaller numbers > function 3 parameter
function findBigger(first,second,third){
    if (first < second && first < third) {
        return first;
    }else if (second < first && second < third) {
        return second
    }else
    {
        return third
    }
}

var result = findBigger(500,600,900)
// console.log(result)

// class-4 not yet 
/* Declare array sum all number 2 ways for loop and function into > loop
Array sum all numbers > for loop
Array sum all numbers > function () {
 for loop
}
 */
// Array sum all numbers using loop 
var sumArr = [4,3];
var element = 0;
for(i = 0;i < sumArr.length;i++){
   element += sumArr[i];
    // element + sumArr[i]
}
// console.log(element)

// Array sum all numbers using functions
function sumAll(sumNum){
    var sum = 0;
    for(i = 0;i < sumNum.length; i++ ){
       sum += sumNum[i]
    }
    return sum
}
var sumResult = sumAll([3,4]);
// console.log(sumResult)
// class-5 not yet 
/* Find large number in array
Find larger number > function (){
For loop(){
If else(){}
}
}
.Find smaller number >
 */
// Find larger number > function
function largestArray(arrNum) {
    var larger = 0;
    for(i = 0;i < arrNum.length; i++){
        var element = arrNum[i];
        if (element > larger) {
            larger = element
        }
    }
    return larger
 }
var arrayNumber = largestArray([20,90,10,500,85,5]);
// console.log(arrayNumber)

// Find smaller number > function
function largestArray(arrNum) {
    var larger = 100;
    for(i = 0;i < arrNum.length; i++){
        var element = arrNum[i];
        if (element < larger) {
            larger = element
        }
    }
    return larger
 }
var arrayNumber = largestArray([20,90,3,10,500,85,5]);
// console.log(arrayNumber,"it's lower number to an array")

// class-6 not yet 
// fibonacci with loop 
var fibo = [0,1];
for(i = 2;i < 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}
// console.log(fibo)

// class-7 not yet 
// fibonacci advanced 
// fibonacci with functions
function fiboNacci(input) {
// console.log(typeof input);
if (typeof input != "number") {
    console.log("please a valid number")
}else if (input <= 3) {
    console.log("please type 3n more characters")
}
    var fibo = [0,1];
    for(i = 2;i < input;i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo
}
var fiboResult = fiboNacci(5);
// console.log( fiboResult);

function fiboNacci(usersInput) {
    if (typeof usersInput != "number") {
        console.log('please type a valid number')
    }else if (usersInput < 3) {
        console.log('more 3 c')
    }else if (typeof usersInput == "number") {
        console.log("ok")
    }
    var fibo = [0,1];
    for(i = 2;i < usersInput;i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var resultFibo = fiboNacci(5);
console.log(resultFibo)