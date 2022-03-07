/* class-1 
Js need an any issue &&& must be search google it
Find a bigger number from function
Find a smaller number from function
 */
function largestNumber(num) {
    var largest = 0;
    for(i = 0;i < num.length;i++){
        var ele = num[i];
        if (ele > largest) {
            largest = ele;
        }
    }
    return largest
}

var largestResult = largestNumber([120,35,90,760]);
// console.log(largestResult)

/* class-2
Find duplicated an unique array names
Using for of loop into use if lese
 */
var arr = [2,3,9,2,3,5,7,9,3,2,6];

function removeDup(arr) {
    var unique = [];
    for(var element of arr){
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}

var result = removeDup(arr)
// console.log(result)

/* class-3
Any string reverse
First use devtools console test array reverse
Use function into for of loop */
var reverse = "Hello World hamed hasan";

function  reverseText(text) {
    let addReverse = "";
    for(const letter of text){
        addReverse = letter + addReverse
    }
    return addReverse
}

var result = reverseText(reverse);
// console.log(result)

// class-2
// input parameter error & debugging console
function parameterError(num1,num2) {
    return num1 + num2;
}
var result = parameterError(10 ,20);
// console.log(result)

// class-2
// Functions declare & into 3 parameter use 
// need Any product get total value means
// One table 3 wood needed
// One table how wood needed
function woodQuantity(tableQuantity,chairQuantity,bedQuantity) {
    var tableWood = 20;
    var chairWood = 20;
    var bedWood = 50;
    const tableMultiply = tableQuantity * tableWood;
    const chairMultiply = chairQuantity * chairWood;
    const bedMultiply = bedQuantity * bedWood;
    var total = tableWood + chairWood + bedWood;
    return total
}
var totalQuantity = woodQuantity(1,1,1)
// console.log(totalQuantity)

// class-6
// Dividing foor loop & use if else
for(i = 1;i < 50; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        // console.log("divide 3 and  5")
    }else if (i % 3 == 0) {
        // console.log("divide only 3")
    }else if (i % 5 == 0) {
        // console.log("divide 5")
    }else{
    // console.log(i)
    }
}

// class-7
// Find cheapest phone from an array 
// Using foor of loop

var phones = [
    {name:"samsung",price:"40000"},
    {name:"vivo",price:"8882000"},
    {name:"oppo",price:"3000"},
    {name:"simple nokia",price:"30"},
    {name:"iphone",price:"60000"}
];
let cheapest = phones[0]
for(const phone of phones){
    // reverse if this line 
   if (cheapest.price > phone.price) {
       cheapest = phone
   }
}
// console.log(cheapest)

// class-8
// Total calculate product from an array 2 ways
// Product total
// Product & product quantity
// sum all product method-1 
var products = [
    // {name:"samsung",quantity:20}, 
    {name:"vivo",price:40},
    {name:"oppo",price:10},
    {name:"simple nokia",price:10},
    {name:"iphone",price:20}
];
let total = 0;
for(const product of products){
   total = total + product.price
}
// console.log(total)

// sum all product and quantity method-2 
var cart = [
  { name: 'laptop', price: '20', quantity: 2},
  { name: 'mobile', price: '30', quantity: 1},
  { name: 'shirt', price: '50', quantity: 8},
  { name: 'watch', price: '10', quantity: 2}
];

let cartTotal = 0;
// for(const product of cart){
//     console.log(product)
//     const productTotal = product.price * product.quantity;
//     cartTotal = cartTotal + productTotal;
// }


// console.log(totalResult)

// class-9
function animalCount(miles) {
    const animalDensityFirst10 = 10;
    const animalDensitySecond10 = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10;
        return count
    }else if (miles <= 20) {
        const firstDenseAnimals = 10 * animalDensityFirst10;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals
    }else{
        const firstDenseAnimals = 10 * animalDensityFirst10;
        const secondDenseAnimals = 10 * animalDensitySecond10;
        const restMiles = miles -20;
        const restDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals;
    }
}
var totalMiles = animalCount(125)
console.log(totalMiles)


// place: nuria check post er age guriere jeta porbe sheta 