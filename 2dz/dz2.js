let namesArray = [];
for (let i = 0; i < document.body.firstElementChild.rows.length; i++) {
    namesArray.push(document.body.firstElementChild.rows[i].cells[0].innerHTML);
    }
console.log(namesArray);

// let agesArray = [];
// for (let i = 0; i < document.body.firstElementChild.rows.length; i++) {
//     namesArray.push(document.body.firstElementChild.rows[i].cells[1].innerHTML);
//     }
// console.log(agesArray);

// function getArrayOfObjects(tableArray) {
//   let result = [];
//   for (let i = 0; i < document.body.firstElementChild.rows.length; i++) {
//     result.push({
//       name: document.body.firstElementChild.rows[i].cells[0].innerHTML,
//       length: document.body.firstElementChild.rows[i].cells[1].innerHTML,
//     });
//   }
//   return result;
// }
// console.log(getArrayOfObjects(document.body.firstElementChild.rows));

// let i = 0
// for (; i < 100; i++) {
//   console.log(i * i)
// }
// Описать массив из объектов с двумя полями: строковым и числовым. Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.
// const objectsArray = [{name: 'Al', age: 69}, {name: 'Karl', age: 10}, {name: 'Stan', age: 7}, {name: 'Anna', age: 29}, {name: 'Jane', age: 9}];
// for (const { name, age } of objectsArray) {
//   if (age > 10) {
//     console.log(name)
//   } 
// }
// Написать функцию, которая принимает массив чисел и возвращает максимальное число из массива.

// function getMaxNumber(numbersArray) {
//   let maxNumber = 0;
//   for (let number of numbersArray) {
//     if (number > maxNumber) {
//       maxNumber = number;
//     } 
//   } 
//   return maxNumber;
// }

// console.log(getMaxNumber([2, 4,500, 7, 1, 30]))

// Задать массив слов. В цикле сформировать массив объектов с ключами word (само слово), length (длина слова)

// * Реализовать это в виде функции, которая принимает массив слов и возвращает массив объектов.
// const wordArray = ['apple', 'banana', 'pineapple', 'cherry', 'lemon'];
// let objectArray = [];
// for (let word of wordArray) {
//   console.log(word.length);
//   objectArray.push(word);
// }
// console.log(objectArray)
// console.log(objectArray);


const newArray = [];
function getArrayOfObjects([]) {
  let objectArray = {};
  for (let word of wordArray) {
    objectArray.word(word);
    objectArray.lenght(word.lenght)
  } console.log(objectArray)
} 