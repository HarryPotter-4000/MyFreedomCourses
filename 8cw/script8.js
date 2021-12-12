// let a = 5;
// let b = 7;
// let summ = a + b;
// console.log(`значение_${a} + значение_${b} = сумма_a_и_b${summ}`);

// function getOne() {
//     console.log(1);
//     return 2;
// }
// getOne();
// const number = getOne();

// function getOne(parA) {
//     console.log(parA);
//     return 2;
// }
// getOne(332);

// Стрелочные функции
// const ShowNumberArrow = () => { console.log(1) }
// const ShowNumberArrow = function () => { console.log(1) }

// const GetTwo = () => { console.log(2) } 
// const GetTwo = () => console.log(2)
// чтобы получить сразу значение то без {}
// если с {} то return
// let ShowNumber6 = (g) => { return g * 3 };
// ShowNumber6(7);
// const summ = (n, t) => { return n * t };
// summ(7, 3);
// const getSquare = (number) => number * number;
// getSquare(3);

// let user = { name: 'Katya' };
// // user.age = 33;
// user['age'] = 25;
// user.sayHi = () => console.log('hi');
// ---------------все что перед = и есть название функции

// const newArray = [1, 2, 3];
// for (let item of newArray) {
//     console.log(item);
// }
// newArray.forEach(function (element) {
//     console.log(element);
// }

// ----------------Анонимная стрелочная функция
// newArray.forEach((element, index) => console.log(element[index]));

// const fruitsArray = ['Apple', 'Banana', 'Kiwi', 'Bread'];

// const fruitsString = fruitsArray.toString();
// const fruitsStringAnother = fruitsArray.join();

// const numbersArray = [1, 2, 4, 5];
// const ArrayOfString = [];
// numbersArray.forEach((element, index) => ArrayOfString.push(`${element} + ${index}`));

// ------------готовый метод map функция обратного вызова как параметр colback
// [2, 4, 6].map((element) => element ** 2);
// numbersArray.map((element, index) => ArrayOfString.push(`${element} + ${index}`));
let input = document.querySelector('input');
// input.onmouseover = () => console.log(1344254)

// -------------Готовому Input добавили метод объекту при наведении курсором
// input.addEventListener('click', function () {
//     console.log(`Hi`);
// })
input.addEventListener('click', () => console.log(`Hi`));