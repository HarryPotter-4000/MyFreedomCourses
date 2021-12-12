// function reverse(randomArray) {
//     const reversed = [];
//     for (let i = randomArray.length - 1; i >= 0; i--) {
//         reversed.push(randomArray[i]);
//     }
//     return reversed;
// }


///// js lesson 4

// let a = 10
// let b = a
// a = 15
// console.log(a, b)

// let obj1 = {
//     name: 'Kate'
// }
// let obj2 = obj1
// obj.email = 'sgdsgdg'
// console.log(obj1, obj2)

// let c = {
//     a: 10
// }
// let d = {
//     a: 10
// }
// console.log(c == d)

// Function

//function declaration - имеет свойство как хойстин
// function shoewHello() {
//     console.log('Hello')
// }

// псевдомассив
// let calcSumm = function (a, b) {
//     console.warn([...arguments]) // Из псевдомассива в массив
//     let resultSumm = a + b

//     return resultSumm
// }

// let resultShoewHello = shoewHello()
// let resultSumm = calcSumm(5, 10, 25)

// console.log(resultShoewHello)
// console.log(resultSumm)


//Объекты

// function signIn(password) {
//     if (password == user.password) {
//         alert(`Welcom, ${user.name}`)
//     } else {
//         console.error('Password is wrong')
//     }
// }

// const user = {
//     role: 'admin',
//     password: '123456',
//     showInfo: function () {
//         console.log(user.role)
//     },
//     signIn: signIn,

// }
// const user2 = {
//     role: 'simple',
//     password: '111111',
//     showInfo: function () {
//         console.log(user2.role)
//     },
//     signIn: signIn,

// }
// user.name = 'Kate'
// user.role = 'simple'

// // delete user.role

// user.showInfo()
// console.log(user)

// //методы объектов

// user.signIn('123456')


//this

function signIn(password) {
    if (password == this.password) {
        alert(`Welcom, ${this.name}`)
    } else {
        console.error('Password is wrong')
    }
}
function showInfo () {
        console.log(this.role)
    },

const user = {
    role: 'admin',
    password: '123456',
    showInfo: function () {
        console.log(user.role)
    },
    signIn: signIn,

}
const user2 = {
    role: 'simple',
    password: '111111',
    showInfo: showInfo
    // то же самое
    signIn
}
user.name = 'Kate'
user.role = 'simple'

// delete user.role

user.showInfo()
console.log(user)

//методы объектов

user.signIn('123456')


//замыкание

// рекурсия

function calcSum(number) {
    if (number == 0) return 0
    return number + calcSum(number - 1)
}
let resultSumm = calcSum(5)
console.log(resultSumm)

let userName = prompt("Назовите ваше имя:", "");
let userAge = prompt("Введите свой возраст:", "");
