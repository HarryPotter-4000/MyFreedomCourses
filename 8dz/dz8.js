// 1---------------------
// const myArr = [4, 1, 'three', 2, 'five'];
// let newArr = [];
// for (let i = 0 + 1; i < myArr.length; i += 2) {
//     newArr.push(myArr[i]);
// }
// console.log(newArr);
// ----------OR---------------
// const newArr = [4, 1, 'three', 2, 'five'].map((element) => element);
// console.log(newArr);

// 2---------------------
// function getEvenNumbers(randomArray) {
//     const evenNumbers = [];
//     for (let i = 0 + 1; i < randomArray.length; i += 2) {
//         evenNumbers.push(randomArray[i]);
//     }
//     return evenNumbers;
// }
// ----------OR---------------
// function getEvenValuesFromArray(randomArray) {
//   const evenNumbers = [];
//   randomArray.forEach((element, index) => {
//     if (index % 2 === 0) {
//       evenNumbers.push(element);
//     }
//   });
//   return evenNumbers;
// };
// console.log(getEvenValuesFromArray([1,4,6,7,9,10]));

// 3--------------------------
// const objectsArray = [{name: 'Al', age: 69}, {name: 'Karl', age: 10}, {name: 'Stan', age: 7}, {name: 'Anna', age: 29}, {name: 'Jane', age: 9}];
// for (const { name, age } of objectsArray) {
//     if (age > 10) {
//     console.log(name)
//     } 
// }
// ----------OR---------------
// function getName(randomArray) {
//     randomArray.forEach(function(item, randomArray) {
//         console.log(`${item.name}`);
//     });
// }
// getName([{name: 'Al', age: 69}, {name: 'Karl', age: 10}, {name: 'Stan', age: 7}, {name: 'Anna', age: 29}, {name: 'Jane', age: 9}]);

// 4--------------------------
// Написать функцию, которая принимает массив чисел и возвращает максимальное число из массива.
// function getMaxNumber(numbersArray) {
//     let maxNumber = 0;
//     for (let number of numbersArray) {
//         if (number > maxNumber) {
//             maxNumber = number;
//         } 
//     } 
//     return maxNumber;
// }
// console.log(getMaxNumber([2, 4, 500, 7, 1, 30]))
// ----------OR---------------
// function getMaxNumber(numbersArray) {
//     let maxNumber = 0;
//     numbersArray.forEach((item) => {
//         if (item > maxNumber) {
//             maxNumber = item;
//         } 
//     });
//     return maxNumber;
// }
// console.log(getMaxNumber([1,4,16,7,9,10]));

// 5--------------------------
// function getArrayOfObjects(wordArray) {
//     let result = [];
//     for (let word of wordArray) {
//         result.push({
//             word,
//             length: word.length,
//         });
//     }
//     return result;
// }
// console.log(getArrayOfObjects(['apple', 'banana', 'pineapple', 'cherry', 'lemon']));
// ----------OR---------------
// function getObjectsWithLength(wordArray) {
//     return wordArray.map(word => {
//       return {
//         word,
//         length: word.length,
//       }
//     });
// }
// console.log(getObjectsWithLength(['apple', 'banana', 'pineapple', 'cherry', 'lemon']));

// 6--------------------------
// let body = document.querySelector('body');
// let fruits = [{ name: 'orange', color: 'orange', weight: 2 }, { name: 'kiwi', color: 'green', weight: 1 }, { name: 'banana', color: 'yellow', weight: 3 }]
//     for (let fruit of fruits) {
//         // создание tr
//         let div = document.createElement('div');
//         div.textContent = `I have ${fruit.weight} ${fruit.color} ${fruit.name}!`;
//         body.appendChild(div);
// }
// ----------OR---------------
// function createNewDiv (fruitsArray) {
// let body = document.querySelector('body');
//     fruitsArray.forEach(function(item) {
//         let div = document.createElement('div');
//             div.textContent = `I have ${item.weight} ${item.color} ${item.name}!`;
//             body.appendChild(div);
//     })
// }
// createNewDiv([{ name: 'orange', color: 'orange', weight: 2 }, { name: 'kiwi', color: 'green', weight: 1 }, { name: 'banana', color: 'yellow', weight: 3 }])

// 3. Вставить в страницу(в html документ) тег < select >.
// С помощью js добавить в этот select опции(option) под годы от 1960 по 2020.

// function createYearOptions(from, to) {
//     const select = document.querySelector('select');
//     for (let year = from; year <= to; year++) {
//         let option = document.createElement('option');
//         option.textContent = `${year}`;
//         select.appendChild(option);
//     }
// }
// createYearOptions(1960, 2020);
// 4 - 4.1*
// const body = document.querySelector('body');
// let input = document.createElement('input');
// // let div = document.createElement('div');
// body.appendChild(input);
// // body.appendChild(div);
// // input.addEventListener('keyup', function () {
// //     div.textContent = `Клиент набирает: ${input.value}`;
// // });
// let button = document.createElement('button');
// body.appendChild(button);
// button.addEventListener('click', () => {
//     let ul = document.createElement('ul');
//     let li = document.createElement('li');
//     body.appendChild(ul);
//     ul.appendChild(li);
//     li.textContent = `Клиент набирает: ${input.value}`;
//     input.value = '';
// });

// 5
// 1. Найти тег формы
// 2. Повесить на него обработчик события submit
// 3. Внутри обработчика найти инпут
// 4. Вызвать eval со значением инпута
// 5. Записать значение, которое вернул eval, в тег div

// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault();
//     const input = document.querySelector('input');
//     const div = document.querySelector('div');
//     div.textContent = eval(input.value);
// })
// const select = document.querySelector('select');
// const firstNumberInput = document.getElementById('firstNumber');
// const secondNumberInput = document.getElementById('secondNumber');
// const resultDiv = document.querySelector('div.result');
// document.querySelector('button').addEventListener('click', (event) => {
//     const firstNumber = Number(firstNumberInput.value);
//     const secondNumber = Number(secondNumberInput.value);
//     let result = 0;
//     if (select.value === '+') {
//         result = firstNumber + secondNumber;
//     } else if (select.value === '-') {
//         result = firstNumber - secondNumber;
//     } else if (select.value === '*') {
//         result = firstNumber * secondNumber;
//     } else if (select.value === '/') {
//         if (secondNumber !== 0) {
//             result = firstNumber / secondNumber;
//         } else {
//             result = `Делить на 0 нельзя!`;
//         }
//     }
//     resultDiv.innerHTML = `Итого: <b>${result}</b>`;
//     event.preventDefault();
// }) 
function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}
const colorArray = ['red', 'yelow', 'lightorange', 'lightwhite', 'lightgreen', 'lightblue', 'lightgrey'];
const angleArray = ['15deg', '45deg', '90deg', '180deg', '145deg', '30deg', '110deg'];
const button = document.querySelector('button.change');
button.addEventListener('mouseenter', (event) => {
    button.style.background = `${getRandomItem(colorArray)}`;
});

button.addEventListener('mouseleave', (event) => {
    button.style.transform = `rotate(${getRandomItem(angleArray)})`;
});