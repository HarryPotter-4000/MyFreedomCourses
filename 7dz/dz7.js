// let body = document.querySelector('body');
// let fruits = [{ name: 'orange', color: 'orange', weight: 2 }, { name: 'kiwi', color: 'green', weight: 1 }, { name: 'banana', color: 'yellow', weight: 3 }]
//     for (let fruit of fruits) {
//         // создание tr
//         let div = document.createElement('div');
//         div.textContent = `I have ${fruit.weight} ${fruit.color} ${fruit.name}!`;
//         body.appendChild(div);
// }
// const evenArray = [];
// let listElements = document.querySelectorAll('li');
// for (const li of listElements) {
//   const number = parseInt(li.innerText, 10);
//   if (number % 2 === 0) {
//     evenArray.push(number);
//   }
// }

// const ul = document.createElement('ul');
// evenArray.forEach(function (evenNumber) {
//   const li = document.createElement('li');
//   li.textContent = `${evenNumber}`;
//   ul.appendChild(li);
// });
// document.body.appendChild(ul);

// 3333333333333333333333333333333333333333333333

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

let body = document.querySelector('body');
let input = document.createElement('input');
body.appendChild(input);
let select = document.createElement('select');
body.appendChild(select);
let option1 = document.createElement('option');
option1.textContent = 'pineapple';
select.appendChild(option1);
let option2 = document.createElement('option');
option2.textContent = 'watermelon';
select.appendChild(option2);
let option3 = document.createElement('option');
option3.textContent = 'papaya';
select.appendChild(option3);
let ul = document.createElement('ul');
body.appendChild(ul);
const optionValues = [];
for (const option of select.querySelectorAll('option')) {
  optionValues.push(option.innerText);
}

setInterval(function () {
  let li = document.createElement('li');
  li.textContent = getRandomItem(optionValues);
  ul.appendChild(li);
}, 1000);

