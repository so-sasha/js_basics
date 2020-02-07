function sayHelloToConsole() {
  console.log("Hello")
}
sayHelloToConsole()

function sayHello(name = "незнакомец") {
  // if (name === undefined) {
  //   name = "незнакомец"
  // }
  // name = name || "незнакомец"
  alert("Hello " + name + "!")
}
// sayHello("Женя")
// sayHello()

let adminName = "Иннокентий"
function logUser() {
  let userName = "Иван Иваныч"
  console.log(userName)
  console.log(adminName);
}
logUser()
// console.log(userName)
console.log(adminName)

function getName() {
  let myName = "Женя"
  return myName
}
let user = getName()
console.log(user)

function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log("Варю " + cups + " кофе с молоком")
  }
  return console.log("Варю " + cups + " кофе без добавок")
}
makeCoffee(24, false)
makeCoffee(3, true)
makeCoffee(8)


// function findMax(a, b) {
//   if (a > b) {
//     return a
//   }
//   if (b > a) {
//     return b
//   }
//   if (a === b) {
//     return "Числа равны"
//   }
// }
// a = Number(prompt("Введите число"))
// b = Number(prompt("Введите число"))
// console.log(findMax(a, b));


// function showQuote(text, author) {
//   if (text === undefined) {
//     return
//   }
//   if (author === undefined) {
//     author = "Неизвестный автор"
//   }
//   let result = text + " " + author
//   return result
// }
// text = prompt("Введите цитату")
// author = prompt("Введите автора")
// console.log(showQuote(text, author))
// console.log(showQuote())



function addOne(number) {
  let result = number + 1
  return result
}
let number = Number(prompt("Введите число"))
console.log(addOne(number))
let bigNumber = addOne(9)
console.log(bigNumber)
