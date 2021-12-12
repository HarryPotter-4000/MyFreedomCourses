let i = 0
for (; i < 100; i++) {
  console.log(i * i)
}
// Описать массив из объектов с двумя полями: строковым и числовым.
// Пройти в цикле по массиву и вывести строковое поле каждого объекта,
// если его числовое поле больше 10.
const objectsArray = [{name: 'Al', age: 69}, {name: 'Karl', age: 10}, {name: 'Stan', age: 7}, {name: 'Anna', age: 29}, {name: 'Jane', age: 9}];
for (const { name, age } of objectsArray) {
    if (age > 10) {
    console.log(name)
    } 
}

function getMaxNumber(numbersArray) {
    let maxNumber = 0;
    for (let number of numbersArray) {
        if (number > maxNumber) {
            maxNumber = number;
        } 
    } 
    return maxNumber;
}

console.log(getMaxNumber([2, 4, 500, 7, 1, 30]))


function getArrayOfObjects(wordArray) {
    let result = [];
    for (let word of wordArray) {
        result.push({
            word,
            length: word.length,
        });
    }
    return result;
}
console.log(getArrayOfObjects(['apple', 'banana', 'pineapple', 'cherry', 'lemon']));


function processTable(tableRows) {
    let result = [];
    for (const row of tableRows) {
        if (row.cells.length === 2) {
            const [nameCell, ageCell] = row.cells;
            const name = nameCell.innerText;
            const age = parseInt(ageCell.innerText, 10);
            ageCell.textContent = (age >= 18) ? 'совершеннолетний' : 'несовершеннолетний';
            result.push({
                name, 
                age,
            });
        }
    }
    return result;
}
console.log(processTable(document.body.firstElementChild.rows));