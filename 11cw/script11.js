// function onlYEven(numbersArray) {
//     return numbersArray.filter(number => number % 2 === 0 && number >= 0);
// }
// console.log(onlYEven([2,9,3,12,120,-11,3,20]))

// const userObj = { name: 'Elene', age: 28 };

// let body = document.querySelector('body');
// body.innerHTML += `<div class="user"><div>${userObj.name}</div></div>`;
// const users = [{ name: 'All', age: '110' },
//     { name: 'Bob', age: '15' },
//     { name: 'Ron', age: '30' }];
// let button = document.querySelector('button');
// button.addEventListener('click', function (event) {
//     const user = users.pop();
//     let tr = document.createElement('tr');
//     tr.innerHTML = `
//     <td>${user.name}</td>
//     <td>${user.age}</td>`
//     document.querySelector('tbody').appendChild(tr);
// })
// let xmlHttp = new XMLHttpRequest();

// xmlHttp.onload = function () {
//     document.querySelector('div').textContent = JSON.parse(xmlHttp.responseText).title;
//     document.querySelector('div').innerHTML = `<p>${JSON.parse(xmlHttp.responseText).id}</p>`;
// }
// xmlHttp.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
// xmlHttp.send();
// document.querySelector('div').innerHTML = `<p>JSON.parse(xmlHttp.responseText).id</p>`

let xmlHttp = new XMLHttpRequest();

xmlHttp.onload = function() {
    const tasks = JSON.parse(xmlHttp.responseText);
    console.log(tasks);
    for (let i = 0; i < 20; i++) {
        let li = document.createElement('li');
        li.textContent = tasks[i].title;
        let ul = document.querySelector('ol');
        ul.appendChild(li);

    }
}

xmlHttp.open("GET", 'https://jsonplaceholder.typicode.com/todos/');
xmlHttp.send();