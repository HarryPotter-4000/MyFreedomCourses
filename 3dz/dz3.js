// 2---------------------------------
// const me = {
//     name: 'Kate',
//     age: 31,
//     finished: {
//     first:'school',
//     second:'kolledge',
//     }
// };
// console.log(me);
// 4----------------------------------
// const myRoom = {
//     height: 3.3,
//     perimeter: 12,
//     window: 1,
//     door: true,
//     skins: true,
//     bed: 1,
//     sofa: true,
//     desk: 'рабочий стол',
//     chair: true,
//     me: true,
//     moveAround: function () {
//         console.log(`${me.name} идет к ${myRoom.desk}`)
//     },
// }
// 7------------------------------------
// const myArr = [4, 1, 'three', 2, 'five'];
// let newArr = [];
// for (let i = 0 + 1; i < myArr.length; i += 2) {
//     newArr.push(myArr[i]);
// }
// console.log(newArr);


// function getEvenNumbers(randomArray) {
//     const evenNumbers = [];
//     for (let i = 0 + 1; i < randomArray.length; i += 2) {
//         evenNumbers.push(randomArray[i]);
//     }
//     return evenNumbers;
// }
// 8------------------------------------------------------
// const shoppingCart = ['bread', 'cheese', 'sausages', 'butter', 'tea', 'sugar'];
// shoppingCart.splice(0, 3, 'gluten free bread', 'vegan cheese', 'vegan sausages');
// shoppingCart.push('beer');
// shoppingCart.pop();
// shoppingCart.shift();
// shoppingCart.unshift('soya');
// delete shoppingCart[0];
// delete shoppingCart[1];
// delete shoppingCart[2];
// shoppingCart.unshift('sausages');
// shoppingCart.unshift('cheese');
// shoppingCart.unshift('bread');
// shoppingCart.push('beer');
// console.log(shoppingCart);
// 9-------------------------------------------------------
// function isEven(anyNumber) {
//     return (anyNumber % 2 === 0);
// }
// alert(isEven(5) ? 'Число чётное!' : 'Число нечётное!');
// 10-------------------------------------------------------
// function pow(x, n) {
//     if (n === 0) return 1;
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// console.log(pow(3,3));
// 11-------------------------------------------------------
// function Sum(numberCount) {
//     let result = 0;
//     for (let i = 0; i <= numberCount; i++) {
//         result += i;
//     }
//     return result;
// }
// console.log(Sum(3));
// 12-------------------------------------------------------
// function findCommonElements(firstArr, secondArr) {
//     const common = [];
//     for (const elementOfFirstArr of firstArr) {
//         for (const elementOfSecondArr of secondArr) {
//             if (elementOfFirstArr === elementOfSecondArr) {
//                 common.push(elementsOfFirstArr);
//             }
//         }
//     }
//     return common;
// }
// 13-------------------------------------------------------
// const me = {
//     name: 'Kate',
//     age: 31,
//     city:'Lviv',
//     finished: {
//     first:'school',
//     second:'kolledge',
//     },
//     say: function() {
//         console.log(me.name + ' stadied ' + me.finished.first);
//     },
//     walk() {
//         console.log(`${me.name} walk the streets of the ${me.city}.`);
//     },
// };
// me.write = function () {
//     console.log(`${me.name} started writing cod at the age of ${me.age}`);
// }
