// function sayHi(name, age){
// // function sayHi
// console.log("hello " + name + " "+ age);
// }
// sayHi("lukas", 26);
// sayHi("villum", 0);

// function sum(a, b){
//  return a + b
// //  console.log(a+b)
// }
// let s = sum(2, 2)
// let sum2 = sum(2, s)
// console.log(sum2)

// function namePrint(name){
//  return "Hi " + name;
// }
// let n = namePrint("Lukas")
// console.log(n)

// function printVariable(variable){
//     console.log(variable)
// }
// function func(x){
//     x("Hello world")
// }
// func(printVariable)

// function printVariable(variable){
//     console.log(variable)
// }

// function printName(name, callback){
//     callback("Hello " + name);
// }

// printName("Villum", printVariable)

let printName = (name)=>{
 return name;
// console.log(name)
}
// let printName = name =>  name;

// console.log(printName("Lukas"))
// // printName("Lukas")

// let oneLine = name => "Hi " + name
// console.log(oneLine("One liner"))


// let a = [1,2,3,4,5,6,7,8,9,10];

// a.push(11)
// a.push("hi")

// console.log(a)
// let numbersArray = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ]

// console.log(numbersArray[0][3])
// console.log(numbersArray[1][2])
// console.log(numbersArray[2][0])

// let car = {
//     Make: "Tesla",
//     Model: 2,
//     isUsed: false,
//     makeNoise: function(){
//         console.log("Vroom")
//     }
// }
// console.log(car)

// let book = {
//     title: "Harry Potter",
//     author: {
//         name: "Weasly",
//         age: 27
//     }
// }

// console.log(book)

// const a = [1,2,3,4,5]

// const newA = a.find((number) =>{
//     return number > 2
// })
// console.log(newA)

// const item = [
//     {price: 10},
//     {price: 20},
//     {price: 14},
//     {price: 1},
//     {price: 6}
// ]

// const s = item.reduce((sum, item)=>{
//     return sum + item.price;
// },0 )

// console.log(s)

// const name = "Lukas";
// const lastname = "Jakobsen";

// console.log(`${name} ${lastname}`)

// function createUser(name, age){
//     return {name: name, age: age, human: true}
// }

// const user = createUser("Sally", 25)
// console.log(user)

// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
// }
// const user2 = new User("Kyle", 25)
// console.log(user2)

// let a = document.querySelector("a")

// a.addEventListener("click", function(e){
// e.preventDefault();

// })




// let priceList = [1,3,5,7,10,15,20,25,45,50,55]

// if (priceList.length == 0) {
//     console.log("empty")
// }else if (priceList.length < 5) {
//     console.log("small")
// }else if( priceList.length < 10){
//     console.log("medium")
// }else{
//     console.log("large")
// }

// let number = 1
// switch (number) {
//     case 0:     
//     console.log("It is zero") 
//         break;
//     case 1:   
//     console.log("It is small")     
//         break;
//     case 2:    
//     console.log("It is small")     
//         break;
//     case 3:       
//     console.log("It is medium")  
//         break;
//     case 4:    
//     console.log("It is medium")    
//         break;
//     case 5:    
//     console.log("It is Large")    
//         break;
//     default:
//         console.log("Try again") 
//         break;
// }

// for(let i = 0; i <= 10; i++){
//     console.log(i)
//     if(i == 5){
//         break;
//     }
// }

const person = {
    name: "kyle",
    friend: {
        name: "Joe",
        friend: {
            name: "Sally"
        }
    }
}
// let currentPerson = person
// while (currentPerson != null) {
//     console.log(currentPerson.name)
//     currentPerson = currentPerson.friend
// }

function printNames(currentPerson){
    if(currentPerson == null) return
    console.log(currentPerson.name)
    printNames(currentPerson.friend)
}

printNames(person)