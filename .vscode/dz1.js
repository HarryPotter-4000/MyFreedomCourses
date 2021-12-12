const me = {
    name: 'Kate',
    age: 31,
    finished: {
        first:school,
        second:kolledge
    }
};
console.log(me);

let userName = prompt('Назовите ваше имя', '');
function sayHello(name) {
    console.log(`Привет, ${name}`);
};
sayHello(userName);

let girl = {
    name: 'Vika',
    age: 16,
    canCode: function () {
        console.log('I write code')
    },
};

console.log(`Меня зовут ${girl.name} и мне ${girl.age} лет`);
girl.canCode();
girl.name = 'Natasha';
console.log(girl.name);