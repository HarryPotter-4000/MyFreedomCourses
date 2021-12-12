// <><><><><><><><><><><><><><><> DOM <><><><><><><><><><><><><><><>
// document.createElement('li');
// ------------- Готовому Input добавили метод объекту при наведении курсором
// input.addEventListener('click', function () {
//     console.log(`Hi`);
// })

// <><><><><><><><><><><><><><><>  FUNCTION <><><><><><><><><><><><><><><>
// Локальные переменные
// function name() {let message = ...}
// Внешние переменные/Глобальные переменные
// let message = ...    
// function name() { }
// Возврат значения: function sum(a, b) { return a + b; };


// -------------- function Declaration - имеет свойство как хойстин
// function имя(параметры) {...}, 
// -------------- function Expression 
// var f = function(параметры) {
//     тело функции
// };

// -------------- Стрелочные функции
// const ShowNumberArrow = () => console.log(1);
//  то же самое
// 
//  то без {}
// если с {} то return
// let ShowNumber6 = (g) => { return g * 3 };
// user.sayHi = () => console.log('hi');
// все что перед = и есть название функции

// --------------- Анонимная стрелочная функция
// newArray.forEach((element, index) => console.log(element[index]));
// --------------- Функции -«колбэки»
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// <><><><><><><><><><><><><><><> Строки <><><><><><><><><><><><><><><>
// Доступ к символам str[i]
// Свойство length содержит длину строки: str.length
// Методы toLowerCase() и toUpperCase() меняют регистр символов: 
// alert('Interface'.toUpperCase()); INTERFACE
// alert( 'Interface'.toLowerCase() ); interface
// Получение подстроки
// str.slice(start[, end])

// -------------- обратные кавычки
// console.log(`значение_${a} + значение_${b} = сумма_a_и_b${summ}`);

// <><><><><><><><><><><><><><><> Объекты <><><><><><><><><><><><><><><>
// user.name тоже самое user["name"]


// <><><><><><><><><><><><><><><> Массивы <><><><><><><><><><><><><><><>
// || (ИЛИ)
// && (И)
// !(НЕ)
// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.
// arr.splice(index[, deleteCount, elem1, ..., elemN])  добавлять, удалять и заменять элементы.
// arr.slice : arr.slice([start], [end]);
// arr.concat(arg1, arg2...)
// arr.concat создаёт новый массив,
//      в который копирует данные из других массивов и дополнительные значения.
// arr.indexOf(item, from) : indexOf/lastIndexOf и includes 
//      ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// arr.find и findIndex : let result = arr.find(function(item, index, array) {
//      если true - возвращается текущий элемент и перебор прерывается
//      если все итерации оказались ложными, возвращается undefined});
// arr.filter(fn) : let results = arr.filter(function(item, index, array) {
//      если true - элемент добавляется к результату, и перебор продолжается
//      возвращается пустой массив в случае, если ничего не найдено});
// 
// -------------- Циклы -------------------------------------
// Цикл «while» : while (condition) { код также называемый "телом цикла" }
//      Код из тела цикла выполняется, пока условие condition истинно.
// Цикл «do …while» : do {тело цикла} while (condition);
// Цикл сначала выполнит тело, а затем проверит условие condition,
//     и пока его значение равно true, он будет выполняться снова и снова.
// Цикл «for» : for (начало; условие; шаг) {... тело цикла ...}; for (let i=0; i<arr.length; i++)
// Цикл «for…in» for – никогда не используйте для массивов!
// for (key in object) {тело цикла выполняется для каждого свойства объекта}

// -------------- Методы массива -------------------------------------
// arr.forEach : arr.forEach(function(item, index, array) {... делать что-то с item});
//      вызывает func для каждого элемента. Ничего не возвращает.
//      numbersArray.forEach((element, index) => ArrayOfString.push(`${element} + ${index}`));

// arr.map :  let result = arr.map(function(item, index, array) {
//              возвращается новое значение вместо элемента});
//      создаёт новый массив из результатов вызова func для каждого элемента.
//      [2, 4, 6].map((element) => element ** 2);
//      numbersArray.map((element, index) => ArrayOfString.push(`${element} + ${index}`));
// arr.filter : var positiveArr = arr.filter(function(number) {return number > 0;});
//      Он создаёт новый массив, в который войдут только те элементы arr,
//      для которых вызов callback(item, i, arr) возвратит true.
// arr.every/some : Эти методы используются для проверки массива.
//      Метод «arr.every(callback[, thisArg]) » возвращает true,
//      если вызов callback вернёт true для каждого элемента arr.
//      Метод «arr.some(callback[, thisArg]) » возвращает true,
//      если вызов callback вернёт true для какого - нибудь элемента arr.
// arr.sort() : arr.sort( (a, b) => a - b );сортирует массив «на месте», а потом возвращает его.
// arr.reverse(); : Метод arr.reverse меняет порядок элементов в arr на обратный.
// names.split(', '); str.split(delim) - разбивает строку на массив по заданному разделителю delim.
// Вызов split(s) с пустым аргументом s разбил бы строку на массив букв:
// arr.join(glue) Он создаёт строку из элементов arr, вставляя glue(',') между ними.
// arr.reduce и arr.reduceRight : используются для вычисления какого - нибудь единого значения
//     на основе всего массива.

// <><><><><><><><><><><><><><><> Тернарный опертор<><><><><><><><><><><><><><><>
// условие ? значение1 : значение2
// (age >= 18) ? access = true : access = false;
// alert(access);

// <><><><><><><><><><><><><><><> switch <><><><><><><><><><><><><><><>
// let a = 2 + 2;
// console.log(a);
// switch (a) {
//   case 3:
//     alert("Мало");
//     break;
//   case 4:
//     alert("В точку");
//     break;
//   case 5:
//   case 6:
//     alert("Много");
//     break;
//   default:
//     alert("Что-то пошло не так");
// }

// -------------- псевдомассив----------------------------------------------------------
// let calcSumm = function (a, b) {
//     console.warn([...arguments]) // Из псевдомассива в массив
//     let resultSumm = a + b

//     return resultSumm
// }

