// // number 
// var eggPrice = "5.555555";
// var chickenPrice = "5";
// // var eggPrice = "33.33"
// // var total = eggPrice + chickenPrice;
// var convertEgg = parseFloat(eggPrice);
// var convertChicken = parseFloat(chickenPrice);
// var totalPrice = convertEgg + convertChicken;
// // totalPrice = totalPrice.toFixed(3);
// // var total = eggPrice + chickenPrice;
// // var eggPrice = eggPrice.toFixed(3);
// console.log(totalPrice.toFixed(4) );

// var watchPrice = 145;
// watchPrice = 200;

// var userName = "hamed hasa";

// var youGo = true;

// var myFriends = ['habib','ekbal','emon','mossarop','borhan'];

// var myFriendsAge = [20, 33, 42, 21, 11];

// var arrayCounts = myFriendsAge.length
// var arrayCountsGet = myFriends.indexOf(2);

// var arrayNameGet = myFriends[2];

// myFriends[4] = ["monir"]
// myFriendsAge.pop();
// myFriendsAge.pop();
// myFriendsAge.pop();
// // myFriendsAge.pop();
// // myFriendsAge.pop();
// var lastPopShow = myFriendsAge.pop();
// console.log(lastPopShow);

// var samsungMobile = 140000;
// var myBudget = 2240000;
// if(samsungMobile || myBudget){
//     console.log("i buy the phone !")
// }else{
//     console.log("i cannot buy the mobile phone beacuse is money is loooooooow !")
// }

// var iWakUp = 7;
// var heSayTheWork = 6;
// if (heSayTheWork <= iWakUp) {
//     console.log("i'm good person's")
// } else {
//     console.log("bad person i'm")
// }

// var iGetsUp = false;
// var breakFastMony = 150;
// var myBossHot = true;
// var iGiveHimMoney = 2000;
// var iDoYourWork = true;

// if ((myBossHot == true != iGetsUp == false && iGiveHimMoney > 500) || breakFastMony >= 151 || iDoYourWork == true ) {
//     console.log("good boy")
// } else {
//     console.log("get out my houses")
// }

// var cake = 45;
// var coffee = 40;
// var milk = 30;
// var eggFood = 20;
// var myBudget = 35;
// var iNeedCakePacket = true;

// if (cake < myBudget) {
//     console.log("i eat cake !")
// }else if (coffee < myBudget) {
//     console.log("i take coffee");

// }else if (milk < myBudget) {
//     console.log("milk kabo");
// }else if (eggFood < myBudget) {
//     console.log("milk kaboooooooo !")
// }
// else {
//     console.log("how to i eat")
// } 

// if (cake < myBudget) {
//  if (iNeedCakePacket == true) {
//      console.log("ok i take it")
//  }   else{
//      console.log("please help")
//  }
// }

// var bike = [];
// bike[0] = "red bike";
// bike[1] = "blue bike";
// bike[2] = "yellow bike";
// bike[3] = "green bike";
// const cars = new Array("bmw","corola");
// lng = cars[cars.length -1];
// var age = [10,20,30,40,50];

// console.log(age.every(checkValue))

// function checkValue(age){
//     return  age > 55;
// }
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let index = fruits.lastIndexOf("Apple", -1);
// console.log(index)
// var fruits = ["Apple", "Orange", "Apple", "Mango"];

// if (fruits.length == 3) {
//     console.log("okkk")
// }
// else if (fruits.length != 4) {
//     console.log("lowwwwwww")
// }
// else{
//     console.log("malish")
// }

// var myMoney = 1;
// while(myMoney <= 10){
//     console.log(myMoney)
// myMoney = myMoney + 2; // odd
// // myMoney++; // even

// console.log("tk den")
// }
// var points = [1,2,3,4];
// var fruits = ["Apple", "Orange", "Apple", "Mango"];
// for(var i = 0; i < fruits.length; i++){
//     var number = fruits[i];
//     // var push = fruits.push(points)
//     console.log(number)
// }
// for(i = 0;i < 10;i++){
//     console.log(i)
// }

// Array.prototype.arrayKeBanUp = function(){
//     for(arrayValue = 0;arrayValue < this.length; arrayValue = arrayValue + 2){
//         this[arrayValue] = this[arrayValue].toUpperCase();
//     }
// }
// arrayFruits.arrayKeBanUp()

// var arrayFruits = [10, 30, 16, 44];

// var find = arrayFruits.filter(myFunc);
// function myFunc(findArray) {  
//     return findArray > 31;
// }


// console.log(find);

// var arrayFruits = [
//     {name:"ahamed",age:26},
//     {name:"brifa",age:28},
//     {name:"chumaira",age:18}
// ];
// var sort = arrayFruits.sort(function (a,b) {
//     if (a.name > b.name) {
//         return 1;
//     }else if (a.name < b.name) {
//         return -1
//     }else{
//         return 0
//     }
//   })

// array foreach
// var force = [10, 30, 16, 44];

// function myFunc (items,index,array) {
//     console.log(items)
//     console.log(index)
//     console.log(array)
// }
// force.forEach(myFunc)

// array map
// var map = [10, 30, 16, 44];
// function myFunc(items) {
//     return items * 2;
// }
// var mapIncrease = map.map(myFunc);
// console.log(mapIncrease)

// // array filter
// var filter = [10, 30, 16, 44];
// function myFunc(items) {
//     return items > 12;
// }
// var filterIncrease = filter.filter(myFunc);
// console.log(filterIncrease)

// // array reduce
// var reduce = [10, 30, 16, 44];
// function myFunc(itemsSum,value,array) {
//     return itemsSum + value;
// }
// var reduceIncrease = reduce.reduce(myFunc,1);
// console.log(reduceIncrease);

//  array every
// var every = [10, 30, 16, 44];
// function myFunc(itemsSum,value,array) {
//     return itemsSum > 9;
// }
// var reduceIncrease = every.every(myFunc);
// console.log(reduceIncrease);


// array some
// var some = [10, 30, 16, 44];
// function myFunc(itemsSum,value,array) {
//     return itemsSum > 34;
// }
// var reduceIncrease = some.some(myFunc);
// console.log(reduceIncrease);

// array find
// var find = [10, 30, 16, 44];
// function myFunc(itemsSum,value,array) {
//     return itemsSum > 30;
// }
// var reduceIncrease = find.find(myFunc);
// console.log(reduceIncrease);

// array from
// console.log(Array.from("abcdefghijklmnop"))

// var myAge = (age < 20) ? "too long":"nothing"

// conditions 

// let force = [10, 30, 16, 44];
// for (let i = 0;i < 20;i++) {
//     // text+= force[i] + "<br>"
// console.log(i);

// }





// module 19 must this practice
// function buyFood(taka) {
//     console.log("food eat", taka);
//     var food = 10;
//     var manyFood = taka / food;
//     return manyFood
//   }
// var foodPrice = 300;
// var quantity = buyFood(foodPrice);
// console.log("daclare food price",quantity)


// function calCulate (num1,num2) {
//     // console.log(num1,num2, "declare paremeter");
//     var total = num1 + num2;
//     return total;
//     // console.log(total)
//   }
//   var setValue = calCulate(10,90)
//   console.log(setValue,"okk")


// function calCulate (num1,num2) {
//     // console.log(num1,num2, "declare paremeter");
//     var total = num1 - num2;
//     return total;
//     // console.log(total)
//   }
//   var setValue = calCulate(10,90)
//   console.log(setValue,"okk")



// function calCulate (num1,num2) {
//     // console.log(num1,num2, "declare paremeter");
//     var total = num1 * num2;
//     return total;
//     // console.log(total)
//   }
//   var setValue = calCulate(3,4)
//   console.log(setValue,"okk")


// Object 
// var mobile = {
//     mobile:"samsung",
//     price:5000,
//     color:"black",
// fullBrand: function(){
//     this.mobile + ' ' + this.price;
// }


// 3 ways change to object value
// mobile.price = 10000;
// mobile["price"] = 20000;
// var changeValue = "price";
// mobile[changeValue] = 30000

// console.log(mobile)

// var color = "red";
// if (color == "blue") {
//     console.log("this is blue")
// }

// else if (color == "green") {
//     console.log("this is gray")
// }
// else if (color == "cyen") {
//     console.log("this is cyen")
// }
// else if (color == "magenta") {
//     console.log("this is magenta")
// }
// else if (color == "black") {
//     console.log("this is black")
// }
// else if (color == "dark") {
//     console.log("this is dark")
// }
// else if (color == "red") {
//     console.log("this is red got")
// }else{
//     console.log("how to find !")
// }

// switch(color){
//     case 'black':
//         console.log("this is black");
//         break;
//     case 'green':
//         console.log("this is green");
//         break;
//     case 'red':
//         console.log("this is red");
//         break;
//     case 'cyan':
//         console.log("this is cyan");
//         break;
//         default:
//         console.log("finish")

// }

// var i = 0;
// while(i < 10){
//     console.log(i)
//     i++;
//     if (i == 4) {
//         continue;
//     }
// }

// const fruits = [10,30,20,50,60,90,40];

// if (fruits.includes(10) != -1) {
//   console.log("ace")
// }

// for(var i = 0;i< fruits.length;i++ ){
//   var fruit = fruits[i];
//     if (fruit < 55) {
//               continue;
//        }
//     console.log(fruit);

// }

// function buyFood(taka){
//   // console.log("function declare")
//   var nasta = 10;
//   var oneFoodPrice = taka  nasta;
//   return oneFoodPrice
// }
// var foodPrice = 200;
// var priceOutput = buyFood(foodPrice)
// console.log(priceOutput)

// function myFood(money){
//   var parePics = 5;
//   var totalPrice = money / parePics;
//   return totalPrice;
// }
// var breakFast = 10;
// var breakFastPrice = myFood(breakFast)
// console.log(breakFastPrice)

// function sumParameter(value1,value2){
//  let sumValue = value1 * value2;
//  return sumValue;
//  if (sumValue != value1) {
//    console.log("down value")
//  }else if (value1 > value2) {
//    console.log("value2 big")
//  }else{
//    console.log("code not work")
//  }
// }
// let setValue = sumParameter(3,4);
// console.log(setValue)

// function myFunction(taka){
// var parata = 5;
// var multiPlyParataWithParameter = taka / parata;
// return multiPlyParataWithParameter
// }
// var iHaveMoney = 300;
// var callFunctionIntoSetMOney = myFunction(iHaveMoney);
// console.log(callFunctionIntoSetMOney)
// var varFunc = returnFunction(3,4)
// function returnFunction(num1,num2){
//   return num1 * num2;
// }

// console.log(varFunc)

// function toCelsius(temperature){
//   return (5/9) * (temperature-32)
// }
// var result = toCelsius(77)
// console.log(result)

// var x = newFunc(3,4)
// console.log(x)
// function newFunc(a,b){
//   return a * b;
// }

// var x = function newFunc(a,b){return a * b};
// var z = x(3,4)
// console.log(z)

// var x = function newFunc(a,b){return a * b};
// console.log(x(3,4))

// (function myFunc(){
//   console.log("hiiiiii")
// })();

// function myFunction(a,b){
//   return arguments.length;
// }
// var result = myFunction();
// console.log(result)

// var es6 = (x,y) => x * y;
// console.log(es6(3,4))

// const x = (x, y) => { return x * y };
// console.log(x(3,4))

// function myFunc(x,y){
//   if (y === undefined) {
//     y = 2;
//   }
//   return x * y
// }
// console.log(myFunc(4))

// function myFunc(x,y = 2){
//   return x * y
// }
// console.log(myFunc(4))

// function sumAll() {
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(sumAll(20,12,40,33,80,10))

// function myFunction(a, b) {
//   return a * b;
// }
// console.log(myFunction(4,3))

// var name = {
//   firstName:"hamed",
//   lastName:"hasa",
//   fullName:function(){
//     return this.firstName + " " + this.lastName;
//   }
// }
// name.firstName = "sayd";
// name["firstName"] = "rifa";
// console.log(name.fullName())

// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // This will return "John Doe":
// console.log(
//   person.fullName.apply(person1, ["Oslo", "Norway"])
// )
// console.log(
//   Math.max.apply(Math, [1,2,3])
// )

// a = 3;
// function myFunc(){
//   return (a * a) + 10;
// }
// console.log(myFunc());


// function addFunc(){
//   // counter += 1
//   let counter = 0;
//   function plus(){counter += 1};
//   plus();
//   return counter;
// }
// console.log(addFunc())

// const add = (function () {
//   let counter = 0;
//   return function () {counter += 1; return counter}
// })();

// add();
// add();
// add();
// console.log(add())
// x = findMax(1, 123, 500, 115, 44, 88);

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }
// console.log(x)


// const action = 'say_hello';
// switch (action) {
//   case 'say_hello':
//     let message = 'hello';
//     console.log(message);
//     break;
//   case 'say_hi':
//     let message = 'hi';
//     console.log(message);
//     break;
//   default:
//     console.log('Empty action received.');
//     break;
// }
// var foo = 1;
// var output = 'Output: ';
// switch (foo) {
//   case 0:
//     output += 'So ';
//   case 1:
//     output += 'What ';
//     output += 'Is ';
//   case 2:
//     output += 'Your ';
//   case 3:
//     output += 'Name';
//   case 4:
//     output += '?';
//     console.log(output);
//     break;
//   case 5:
//     output += '!';
//     console.log(output);
//     break;
//   default:
//     console.log('Please pick a number from 0 to 5!');
// }
// const person = {fname:"John", lname:"Doe", age:25};
// // const person = [20,30];

// let text = "";
// for(let x in person){
//   text += person[x] + " "
// }
// console.log(text)

// function myFunction(time){
//   if (time => 20 && time <= 8) {
//     return true;
//   }
//   return false;

// }
// var funcResult = myFunction(22);
// console.log(funcResult)