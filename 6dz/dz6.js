function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

const fontsSizeArray = ['18px', '24px', '11px'];
const colorArray = ['red', 'green', 'yellow', 'purple'];

let name = prompt('Введите имя', '');
let age = parseInt(prompt('Введите возраст', ''), 10);
const user = {
    name,
    age,
};

let elements = document.querySelectorAll('tr > th');
if (elements.length >= 2) {
    const [nameCell, ageCell] = elements;
    nameCell.textContent = user.name;
    ageCell.textContent = user.age;
    nameCell.style.backgroundColor = getRandomItem(colorArray);
    nameCell.style.fontSize = getRandomItem(fontsSizeArray);
    ageCell.style.backgroundColor = getRandomItem(colorArray);
    ageCell.style.fontSize = getRandomItem(fontsSizeArray);
}
