let a = 10

let b = a

a = 15

console.log(a, b)

let obj1 = {
  name: 'Alexey'
}

let obj2 = obj1

obj1.email = 'jsfgj@sdjgn.re'

console.log(obj1, obj2)

console.log(obj1 == obj2)

let c = {
  a: 10
}

let d = {
  a: 10
}

console.log(c == d)

// Функции
showHello()

function showHello () {
  console.log('Hello')
}

let calcSumm = function (a = 0, b = 0) {
  // console.warn([...arguments]) // из псевдомассива в массив
  let resultSumm = a + b

  return resultSumm
}

let resultShoewHello = showHello()
let resultSumm = calcSumm()

console.log(resultShoewHello)
console.log(resultSumm)

// Объекты
function showInfo () {
  console.log(this.role)
}

function signIn (password) {
  if (password == this.password) {
    alert(`Welcome, ${this.name}`)
  } else {
    console.error('Passwor is not valid')
  }
}

const user = {
  role: 'admin',
  password: '123456',
  showInfo: showInfo,
  signIn: signIn,
}

const user2 = {
  role: 'simple',
  password: 'qwerty',
  showInfo,
  signIn
}

user.name = 'Alexey'
user.role = 'simple'

// delete user.role

user.showInfo()
console.log(user)

// user.signIn('123456')

// ---------------------------------------------------------------------

function getCounter () {
  let counter = 0

  function incrementCounter () {
    counter++
    console.log(counter)
  }

  return incrementCounter
}

const counter1 = getCounter()

// counter1()
// counter1()
// counter1()

const counter2 = getCounter()

// counter2()
// counter2()
// counter2()

// ------------------------------------------------------

function pow (x, n) {
  let result = 1
  for (let i = 0; i < n; i++) {
    result = result * x
  }

  return result
}

sumNested([1, [2, [3, [4]]]]) => 10

function getSumm ([x], n) {
  // if (n == 0) return 1

  return x + getSumm ([x], n - 1)
}

const resultGetSumm = getSumm ([2,3,4], 10)
console.log(resultGetSumm)


function powRec (x, n) {
  if (n == 0) return 1

  return x * powRec(x, n - 1)
}

const resultPowRec = powRec(3, 3)

// 1. 3 * powRec(3, 2)
// 2. 9 * powRec(3, 1)
// 3. 27 * powRec(3, 0)

console.log(resultPowRec)

function calcSummToNum (number) {
  // if (number == 0) return 0

  // return number + calcSummToNum(number - 1)

  return number == 0 ? 0 : number + calcSummToNum(number - 1)
}

let resultCalcSum = calcSummToNum(4)

console.log(resultCalcSum)

// window
console.log(window)
var variableVar = 'var'
console.log(window.variableVar)

let variableLet = 'let'
console.log(window.variableLet)

const random = Math.round(Math.random() * 100)

console.log(random)

const car = {
  brand: 'BMV',
  yaer: 1999,
  model: 'X6',
  wheels: 4,
  isGas: true
}

const cloneCar = Object.assign({}, car)
const isArray = Array.isArray([])


console.log(isArray)

// for...in, for...of

const arr1 = [12, 45, 56, 467, 2345]

// for (let item of arr1) {
//   console.log(item)
// }


const cloneCar2 = {}
for (let key in car) {
  console.log(key + ': ' + car[key])
  cloneCar2[key] = car[key]
}

console.log(cloneCar2)

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 30, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'Y.', country: 'Belarus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
var value = 0
function getNumberMatches(list1, value) {
  for (let item of list1) {
    if (item == list1[item])
    return item
  }
  return value++
}
// Написать функцию, которая обрабатывает массив объектов, имеет 2 аргумента:
// 1) list - массив 2) value - строка или число.
// Функция должна возвращать количество совпадений из каждого объекта. Если совпадений нет, то сообщение 'Совпадений не найдено'
// Например getNumberMatches(list1, 'JavaScript') // вернёт 3
	// нужна переменная, которая будет увеличиваться в цикле при каждом совпаденее
	// нужен цикл для массива в котором будет цикл текущего объекта for (key in list1)
  // ...
const resultMatches = {}
for (let key in list1) {
  console.log(key + ': ' + car[key])
  cloneCar2[key] = car[key]
}


const arr = [1, 2, 3, 4, 5]
let summ = 0
for (let item of arr) {
  if (item % 2 === 0) {
    summ += item
  } summ += 0

}
console.log(summ)


const person = {
  firstname: 'Karl',
  secondname: 'Ivanov',
}
person.age = 10
person{ 'age' }
// document.body.children[0].children[0].children[0].innerText
let newArray = []
for (let li of document.body.children[0].children) {
  console.log(li.innerText)
  newArray.push(li.innerText)
}
