// simple interest formula 
let toInterest = (bank) => {
    // var interest = (peapole * rate) / bank;
    // return interest;
    if ((peapole * rate) / bank) {
        return true;

    } else {
        return false
    }
}

// var islamiBank = 15;
var peapole = 12;
var rate = 12;
var result = toInterest(15)
// var result = (time * rate) / sir;
// console.log(result);

var peapole = 20;
var rate = 12;
var countryResult = toInterest(40);
// console.log(countryResult);

// student find an grade calculation 
var studentGrade = grade => {
    // var grade = 59;
    if (grade >= 90 && grade <= 99) {
        console.log("you got grade A+")
    } else if (grade >= 80 && grade <= 90) {
        console.log("you got gradea A")
    } else if (grade >= 70 && grade <= 80) {
        console.log("you got gradea B")
    } else if (grade >= 60 && grade <= 70) {
        console.log("you got gradea C")
    } else if (grade >= 50 && grade <= 60) {
        console.log("you got gradea D")
    } else if (grade >= 40 && grade <= 50) {
        console.log("you got gradea E")
    } else if (grade >= 30 && grade <= 40) {
        console.log("you got gradea F")
    } else {
        console.log("YOU ARE FILED ALL SUBJECT")
    }
}
// console.log(studentGrade(90))

// using franhiet celcius by function

function toCelsius(temperature){
    var fran = (temperature - 32) * 5/9;
    return fran;
}
// console.log("todays celsius"
//  ,parseInt(toCelsius(75)).toFixed(2))

// using temperature by variable
var fran = 75;
var cels = (fran - 32) * 5/9;
// console.log(parseInt(cels).toFixed(3))

// inch to feet by variable 
var inches = 120;
var feet = toInches(inches);
// console.log(feet)

// inch to feet by function
function toInches(inches){
    var feet = inches / 12;
    return feet
}
// console.log(toInches(1000))

// convert px to rem by variable 
var px = 1000;
var rem = px / 16;
// console.log(rem);
// convert px to rem by function 
function toPixel(pixel){
    var rem = pixel / 16;
    return rem;
}
// console.log(toPixel(1000))
// expel odd or even number variable and function
var odd = 42436;
var result = odd % 2;
// console.log(result)
var odd = 42435;
var result = odd % 2;
// console.log(result)
function isOdd(odd){
    if(odd % 2 === 0){
        return true;
    }
    else{
        return false
    }
}
// console.log(isOdd(54334))

// express leapYear variable and function 
var leapYear = 2232;
var result = leapYear % 4;
// console.log(result);
function isLeapYear(year){
    // using variable 
    // var leapYearResult = year % 4;
    // return leapYearResult
    // using conditions
    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
        return true;
        // console.log("is a leaper") not work
    }
    else{
        return false;
    }
}
//  console.log(isLeapYear(2232),"0 is a leap year")
//  console.log(isLeapYear(2233),"1 is a not leap year")

// express factorial number while and for loop single adn multiple function and without function
var factorial = 1;
var i = 1;
while(i <= 5){
    factorial *= i;
    i++;
}
// console.log(factorial)
var factorial = 1;
for(i = 1;i <= 10; i++){
    factorial *= i;
}
// console.log(factorial)
function factorialLoop(factChange){
    var factorial = 1;
    for(i = 1;i <=factChange; i++){
        factorial *= i;
    }
    return factorial;
}
// console.log(factorialLoop(9),"number nine")
// console.log(factorialLoop(8))
// console.log(factorialLoop(7))
// console.log(factorialLoop(6))

// using array 
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const slice = fruits.slice(1,3);
console.log(slice)