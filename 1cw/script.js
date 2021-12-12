// // Тернарный опертор

// let access;
// // let age = +prompt('Сколько вам лет?', '');
// // if (age >= 18) {
// //   access = true;
// // } else {
// //   access = false;
// // }
// // (age >= 18) ? access = true : access = false;
// // alert(access);

// // условие ? значение1 : значение2

// // let age = +prompt("Ваш возраст:", "");
// // if (age < 3) {
// //   access = "Здравствуй, малыш";
// // } else if (age >= 3 && age < 18) {
// //   access = 'Дарова';
// // } else if (age >=18 && age < 100) {
// //   access = 'Добрый вечер!';
// // } else {
// //   access = 'Вы не человек';
// // }
// // alert(access);

// // access =
// //   age < 3
// //     ? "Здравствуй, малыш"
// //     : age >= 3 && age < 18
// //     ? "Дарова"
// //     : age >= 18 && age < 100
// //     ? "Добрый вечер!"
// //     : "Вы не человек";

// // alert(access);

// // switch

// // let a = 2 + 2;
// // console.log(a);

// // switch (a) {
// //   case 3:
// //     alert("Мало");
// //     break;
// //   case 4:
// //     alert("В точку");
// //     break;
// //   case 5:
// //   case 6:
// //     alert("Много");
// //     break;
// //   default:
// //     alert("Что-то пошло не так");
// // }

// // switch (browser) {
// //   case "Egde":
// //     alert("You're Egde");
// //     break;
// //   case "Chrome":
// //   case "Firefox":
// //   case "Safari":
// //   case "Opera":
// //     alert("You are awesome!");
// //     break;
// //   default:
// //     alert("You are not a browser");
// // }

// // if (browser == "Egde") {
// //   alert("You're Egde");
// // } else if (
// //   browser == "Chrome" ||
// //   browser == "Firefox" ||
// //   browser == "Safari" ||
// //   browser == "Opera"
// // ) {
// //   alert("You are awesome!");
// // } else {
// //   alert("You are not a browser");
// // }

// // const number = +prompt("Введите число между 0 и 3", "");

// // if (number === 0) {
// //   alert("Вы ввели число 0");
// // } else if (number === 1) {
// //   alert("Вы ввели число 1");
// // } else if (number === 2 || number === 3) {
// //   alert("Вы ввели или число 2, или число 3");
// // } else {
// //   alert("Вы точно ввели от 0 до 3?");
// // }

// // switch (number) {
// //   case 0:
// //     alert("Вы ввели число 0");
// //     break;
// //   case 1:
// //     alert("Вы ввели число 1");
// //     break;
// //   case 2:
// //   case 3:
// //     alert("Вы ввели или число 2, или число 3");
// //     break;
// //   default:
// //     alert("Вы точно ввели от 0 до 3?");
// //     break;
// // }

// let user = {
//   name: "John",
//   age: 30,
//   isMarried: false,
// };

// console.log(user);
// console.log(user.name);
// console.log(typeof user);

// let arr = [3, 8, [], "Anna", true];
// console.log(arr);
// // console.log(arr.length);
// // console.log(arr[4]);
// arr[2] = "Masha";
// console.log(arr);

// // arr.push(1, 2);
// // console.log(arr);

// // arr.pop();
// // console.log(arr);

// // arr.shift();
// // console.log(arr);

// // arr.unshift(10);
// // console.log(arr);

// // let newArr = [];

// // for (let i = 1; i <= 80; i++) {
// //   newArr.push(i);
// // }
// // console.log(newArr);

// // Индекс 0: значение 1

// // for (let i = 0; i < newArr.length; i++) {
// //   console.log(`Индекс ${i} = значение ${newArr[i]}`);
// // }

// // FUNCTION

// function multipleNumbers(num1, num2) {
//   console.log(num1 * num2);
// }

// multipleNumbers(5, 2);
// multipleNumbers(10, 4);

// function viewCurrentDate() {
//   console.log(`Сегодня`);
// }

// viewCurrentDate();

// let userName = prompt("Назовите ваше имя:", "");
// let user2 = "Anna";

// function sayHello(name) {
//   console.log(`Привет, ${name}`);
// }

// sayHello(userName);
// sayHello(user2);

// let girl = {
//   name: "Vika",
//   age: 16,
//   canCode: function() {
//     console.log('Я пишу код')
//   },
// };

// console.log(`Меня зовут ${girl.name}, мне ${girl.age} лет`);
// girl.canCode();
// girl.name = 'Natasha';
// console.log(girl.name);

// const newArr = [10, 11, 'big'];

// for (let i = 0; i < 5; i++) {
//   newArr.push(i);
// }
// const abc = 123;

