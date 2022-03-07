function myFunction(time){
    if (time => 20 && time <= 8) {
      return true;
    }
    return false;
  
  }
  var funcResult = myFunction(22);
  console.log(funcResult)

function toInches(inches){
    let feet = inches / 12
    return feet;
}

var myInches = 120;
var feet = toInches(myInches);
console.log(feet)

var inchesTow = 120;
var feet = toInches(inchesTow)
console.log(feet)

var inchesThree = 100;
var feet = toInches(inchesThree)
console.log(feet)

var inchesFour = 50;
var feet = toInches(inchesFour)
console.log(feet)

// class-1
// conditions moonup with frinds 
function getMoney(money){
    if(money > 500 && money > 600){
        return false;
    }
    return true;
}

// class-2 
// inch to feet 
var result = getMoney(700);
// console.log(getMoney());

function toInches(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 1000;
var feet =  toInches(myInches)
// console.log('convert inches to feet myInches',feet)
var rifaInches = 800;
var feet =  toInches(rifaInches)
// console.log('convert inches to feet rifa',feet)
var sayedInches = 700;
var feet =  toInches(sayedInches)
// console.log('convert inches to feet sayed',feet)
var humaInches = 600;
var feet =  toInches(humaInches)
// console.log('convert inches to feet huma',feet)


// km to miles 
function toKilometer(miles){
    var km = miles * 1.60934;
    return km;
}

var merathon = toKilometer(26.2);
// console.log(merathon)

var shere = 59054;
var reminder = shere % 2;
// console.log(reminder)

// class-3 
// even or odd number 
function isOdd(number){
// var vagShes = number % 2;
// return vagShes;
if (number % 2 == 1) {
    return true
}
return false
}

var myNumber = 1893;
var result = isOdd(myNumber);
// console.log(result)

// class-4
// find leap year
function isLeapYear(year){
if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
    return true
}
 return false;
}
// variable declare function 
var leapYear = 2232 ;
var setLeapYear = isLeapYear(leapYear)
// console.log(setLeapYear,"is not a leap year")

// function console.log declare 
// console.log(isLeapYear(2232))

// class-5
// factorial function
/*
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
7! = 5040
8! = 40320
9! = 362880
10! = 3628800
*/
var factorial = 1;
for(i = 1; i <= 10; i++){
// var factorial = factorial * i;
factorial *= i;
}
// console.log(factorial);

// class-6
// multiple factoril declare 

// var factorialLoop = number => {
// var factorial = 1;
// for(i = 1;i <= number; i++){
//     factorial *= i;
// }
// return factorial;

// }
// console.log(factorialLoop(8))

// class-7
// multiple while loop factoril declare 

var factLoop = factNumber => {
    var factorial = 1;
    var i = 1;
    while(i <= factNumber){
        factorial *= i;
        i++;
    }
    return factorial;
}
// console.log(factLoop(10))

// class-7
// multiple reverse while loop factoril declare 

var factLoop = factNumber => {
    var factorial = 1;
    var i = factNumber;
    while(i <= 1){
        factorial *= i;
        i--;
    }
    return factorial;
}
// console.log(factLoop(5))

// class-7
// multiple reverse for loop factoril declare 
var factorialLoop = integer =>{
    var factorial = 1;
    for(i = integer;i <= 1;i++){
        factorial *= i;
    }
    return factorial;
}
console.log(factorialLoop(6))


