// ---------------------- Получить сколько повторяется раз ----------------
// var arr = [1, 3, 4, 1, 1, 3, 4, 5];
// var result = {};
// arr.forEach(function(a){
//     if (result[a] != undefined)
//         ++result[a];
//     else
//         result[a] = 1;
// });
// for (var key in result)
//     document.write('число ' + key + ' == ' + result[key] + ' раз(а) <br>');
// ---------------------- Получить сколько повторяется раз ----------------

// // var arr = [1, 3, 4, 1, 1, 3, 4, 5];
// // var result = {};
// // arr.forEach(function(a){
// //     result[a] = result[a] + 1 || 1;
// // });
// // console.log(result);
// // for (var key in result)
// //     document.write('число ' + key + ' == ' + result[key] + ' раз(а) <br>');

// function getLocation(coordinates, commands) {
//     let x = coordinates[0];
//     let y = coordinates[1];
//     let result = {};
//     commands.forEach(function(a){
//         result[a] = result[a] + 1 || 1;
//     });
//     let forward = result.forward;
//     if (forward === undefined) {
//         forward = 0;
//     }
//     let back = result.back;
//     if (back === undefined) {
//         back = 0;
//     }
//     console.log(back);
//     let right = result.right;
//     if (right === undefined) {
//         right = 0;
//     }
//     let left = result.left;
//     if (left === undefined) {
//         left = 0;
//     }
//     // console.log(forward);
//     // console.log(back);
//     // console.log(right);
//     // console.log(left);

//     y = y + 1 * forward;
//     // console.log(y);
//     y = y - (1 * back);
//     console.log(y);
//     x = x + 1 * right;
//     // console.log(x);
//     x = x - 1 * left;
//     // console.log(x);

//     let newCoordinates = [];
//     newCoordinates.push(x, y);
//     console.log(newCoordinates);
//     return newCoordinates;
// }
// getLocation([0, 5], ['back', 'back', 'back', 'back', 'back']);
// // getLocation([-2, -2], ['forward', 'forward', 'right', 'right']);

// function getTriathlonDistance(distance) {
//     const allDistance = 3.86 + 180.25 + 42.2;
//     const left = allDistance - distance;
  
//     if (distance === 0) {
//       return 'Starting Line... Good Luck!';
//     } else if (distance > 0 && distance < 3.86) {
//       const obj = { 'swim': `${left} to go!` };
  
//       return obj;
//     } else if (distance > 3.86 && distance < 184.11) {
//       const obj = { 'bike': `${left1} to go!` };
  
//       return obj;
//     } else if (distance >= 184.11 && distance < 226.31) {
//       const obj = { 'run': `${left2} to go!` };
  
//       return obj;
//     } else if (distance >= 226.31) {
//       return 'You\'re done! Stop running!';
//     }
//   }

// // getTriathlonDistance(1);

// const user = {
//     firstName: 'Ivan',
//     lastName: 'Vasylchenko',
// };
// function addFullName(user) {
//     user.fullname = `${user.firstName} ${user.lastName}`;
//     user['fullName'] = `${user.firstName} ${user.lastName}`;
// }
// addFullName(user);
// console.log(user);

// const users = [
//     {
//         firstName: undefined,
//         lastName: 'Holy',
//         fullName: 'Jack Holy',
//     },
//     {
//         firstName: undefined,
//         lastName: 'Adams',
//         fullName: 'Mike Adams',
//     },
// ];
// function restoreNames(users) {
//     for (let i = 0; i < users.length; i++) {
//       const posibleName = users[i].fullName.split(' ')[0];
//         console.log(posibleName);
//       users[i].firstName = posibleName;
//     }
//   }
// restoreNames(users);

// const people = [
// {
//     "name": "Emma",
//     "gender": "female",
//     "age": 19
// },
// {
//     "name": "Sophia",
//     "gender": "female",
//     "age": 53
// }
// ]
// // console.log(people[0]["gender"]);
// // console.log(people[0]["age"]);

// function removeFemaleAges(people) {
//     for (let i = 0; i <= people.lenght; i++) {
//         if (people[i]["gender"].value = "female") {
//             const del = [people[i]["age"]];
//             console.log(del);
//             delete people[i]["age"];
//         }
//     }
// }
// removeFemaleAges(people);
// console.log(people);

// const robots = [
//     { coreVersion: 9 },
//     { coreVersion: 13 },
//     { coreVersion: 16 },
//     { coreVersion: 9 },
//     { coreVersion: 14 },
// ];
// // console.log(robots[0].coreVersion);

// function getOutdated(robots, newVersion) {
//     let arr = [];
//     for (let i = 0; i <= newVersion; i++) {
//         if (robots[i].coreVersion < newVersion) {
//             arr.push(robots[i].coreVersion);
//             console.log(arr);
//         }
//     }
//     return arr;
// }
// getOutdated(robots, 10);
// const robot = {
//     version: 16,
//     name: 'Cleaner 3000',
//     released: true,
//     creator: { name: 'Vlad' },
//   };
  
// function getRobotSchema(robot) {
//     const keys = Object.keys(robot);
//     const valuesArray = Object.values(robot);
//     const compair = Object.entries(robot);
//     console.log(compair);
//     for (let elem of compair) {
//         const newArr = {};
//         newArr.elem[0] = 'typeOf ${elem[0]}';
//         console.log(newArr);
//     }
//   }
//   getRobotSchema(robot);

// var arr = [1, 3, 4, 1, 1, 3, 4, 5];
// var result = {};
// arr.forEach(function(a){
//     result[a] = result[a] + 1 || 1;
// });
// console.log(result);

// function colorStones(stones) {
//     let R = 0;
//     let G = 0;
//     let B = 0;

//     let strOfLetter = [];
  
//     strOfLetter = stones.split('');
  
//     const result = {};
  
//     strOfLetter.forEach(function(a) {
//       result[a] = result[a] + 1 || 1;
//     });
//   console.log(result);
//     let countOfValues = 0;
  
//     for (const value of Object.values(result)) {

//       countOfValues += value;
//     }
  
//     const count = countOfValues - Object.keys(result).length;
  
//     return count;
//   }

// colorStones("RGGRGBBRGRR");

// function colorStones(stones) {
//     let R = 0;
//     let G = 0;
//     let B = 0;
    
//     let strOfLetter = [];
  
//     strOfLetter = stones.split('');
  
//     const result = {};

//     strOfLetter.forEach(function(a) {
//       result[a] = result[a] + 1 || 1;
//     });
//   console.log(result);

//   let countOfValues = 0;
//   for (const value of Object.values(result)) {
//     countOfValues += value;
//   }
  
//   const count = countOfValues - Object.keys(result).length;
//     B = result.B;
//     G = result.G;
//     R = result.R;
//     console.log(B);
//     console.log(G);
//     console.log(R);

//     if (countOfValues === 3) {
//         if (countOfValues > 3) {
            
//         }
//     } else {
//         return count;
//     }
    

//     return count;
//   }

// colorStones("RGGRGBBRGRR");

// function combineArrays(first, second) {
//   const result = [];

//   for (let i = 0; i < 3; i++) {
//     result.push(first[i] + second[i]);
//     console.log(result);
//   }

//   return result;
// }
// combineArrays([1, 2, 5], [3, 6, 1]);

// function getProductId(url) {
//   const arrayOfString = url.split('-');
//   console.log(arrayOfString);
//   const ind = arrayOfString.indexOf('p');
  
//   const result = `${arrayOfString[ind + 1]}`;
//   console.log(result);
// }
// getProductId('exampleshop.com/fancy-coffee-cup-p-90764-12052019.html');


// var str = 'фывапролд';
// var strReverse = str.split('').reverse().join(''); // 'длорпавыф'
// // split() возвращает массив, к которому применяются методы reverse() и join()

// function splitString(str) {
//   let arrOfStr = str.split('');
//   let result = [];
//   for (let i = 0; i < arrOfStr.length; i++) {
//       console.log(i);
//       if (arrOfStr[i + 1]) {
//         result.push(`${arrOfStr[i]}${arrOfStr[i + 2]}`);
//       }
//       if (arrOfStr[i + 1] === false) {
//         result.push(`${arrOfStr[i]}_`);
//         break;
//       }
//   }
//   console.log(result);
//   return result;
// }
// splitString('abcdef');


// function splitString(str) {
//   let arrOfStr = str.split('');
  
//   arrOfStr.reduce(function(result, value, index, array) {
//     if (index % 2 === 0)
//       result.push(arrOfStr.slice(index, index + 2));
//       if () {

//       }
//       console.log(result);
//     return result;
//   }, []);
// }
// splitString('abcdefg');


// function splitString(str) {
//   let arrOfStr = str.split('');
//   for (let i = 0 ; i < arrOfStr.length; i += 2) {
//     if (arrOfStr[i + 1] !== undefined) {
//         result.push (`${arrOfStr[i]}${arrOfStr[i+1]}`);
//     } else {
//         result.push (`${arrOfStr[i]}_`);
//     }
//   }
//   return result;
// }

// function isJumping(number) {
//   let str = String(number);

//   let isJumping = true;

//   for (let i = 0; i < str.length - 1; i++) {
//     const a = parseInt(str[i + 1], 10);
//     const b = parseInt(str[i], 10);
//     isJumping = Math.abs(b - a) === 1;
//     if (!isJumping) {
//       break;
//     }
//   }

//   return (isJumping ? 'JUMPING' : 'NOT JUMPING');
// }
// console.log(isJumping(243454));
// console.log(isJumping(79));
// console.log(isJumping(9));

// function isSpecialNumber(n) {
//   const str = String(n);
//   const arr = [0, 1, 2, 3, 4, 5];

//   if (str.length === 0) {
//     return 'NOT!!';
//   }

//   if (str.length === 1
//   && parseInt(str[0], 10) >= 0
//   && parseInt(str[0], 10) <= 5) {
//     return 'Special!!';
//   }

//   if (str.length === 1) {
//     if (parseInt(str[0], 10) === 0 || parseInt(str[0], 10) > 5) {
//       if (parseInt(str[0], 10) === 0 || parseInt(str[0], 10) !== 0) {
//         return 'NOT!!';
//       }
//     }
//   }

//   let is = true;

//   for (let i = 0; i < str.length; i++) {
//     is = parseInt(str[i], 10) >= 0 && parseInt(str[i], 10) <= 5;
//     if (!is) {
//       break;
//     }
//   }

//   return (is ? 'Special!!' : 'NOT!!');
// }
// console.log(isSpecialNumber(2345));
// console.log(isSpecialNumber(9));
// console.log(isSpecialNumber(39));
// console.log(isSpecialNumber(234599));
// console.log(isSpecialNumber(232399));
// console.log(isSpecialNumber(232593));

// function getLeaders(numbers) {
//   const result = [];

//   if (numbers.length === 1) {
//     if (numbers[numbers.length - 1] > 0) {
//       result.push(numbers[i + 1]);
//     }
//   }

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < numbers[i + 1]) {
//       result.push(numbers[i + 1]);
//       if (numbers[numbers.length - 1] > 0) {
//         result.push(numbers[numbers.length - 1]);
//       }
//     }
//   }

//   return result;
// }

// function getLeaders(numbers) {
//   const result = [];


//   let sumRight = 0;
//   for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] > sumRight) {
//       result.unshift(numbers[i]);
//     }
//     sumRight += numbers[i];
//   }
//   return result;
// }


// console.log(getLeaders([-1,-29,-26,-2]));
// console.log(getLeaders([-36,-12,-27]));
// getLeaders([1, 4, 2]);
// console.log(getLeaders([16, 17, 4, 3, 5, 2]));

// function whoIsOnline(friends) {
//   const result = {
//     offline: [],
//     away: [],
//   }

//   for (lei i = 0; i < friends.length; i++) {
//     let n = friends[i];

//     if (n.status === 'online') {
//       if (n.lastActivity <= 10) {
//         result.online.push(n.username);
//       }
//     }

//     if (n.lastActivity > 10) {
//       if (n.status === 'online') {
//         result.away.push(n.username);
//       }
//     }

//     if (n.status === 'ofline') {
//       result.offline.push(n.username);
//     }
//   }
//   if (friends.length > 0) {
//     return result;
//   }
// }
//   const obj2 = {};
//   const test = ['online'];
//   const arrOnline = [];
//   const arrAway = [];
//   const arrOffline = [];

//   for (const i in friends) {
//     const obj1 = friends[i];
//     const arr1 = Object.values(obj1);

//     if (test.includes(arr1[1])) {
//       if (arr1[2] <= 10) {
//         arrOnline.push(arr1[0]);
//       };

//       if (arr1[2] > 10) {
//         arrAway.push(arr1[0]);
//       };
//     } else {
//       arrOffline.push(arr1[0]);
//     }
//   };
//   obj2.online = arrOnline;
//   obj2.offline = arrOffline;
//   obj2.away = arrAway;

//   return obj2;
// }


// function whoIsOnline(friends) {
//   const result = {
//     online: [],
//     offline: [],
//     away: [],
//   };

//   for (let i = 0; i < friends.length; i++) {
//     const n = friends[i];

//     if (n.status === 'offline') {
//       result.offline.push(n.username);
//     }

//     if (n.status === 'online' && n.lastActivity <= 10) {
//       result.online.push(n.username);
//     }

//     if (n.status === 'online' && n.lastActivity > 10) {
//       result.away.push(n.username);
//     }
//   }
  
//   return friends.length !== 0 ? result : {};
// }
// console.log(
// whoIsOnline([{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
//   }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
//   }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
//   }]));

// function addNumbers(object) {
//   let sum = 0;
//   const n = Object.values(object);
  


//   for (let i of n) {
//     if (typeof(i) === 'number') {
//       sum += i;
//     } else if (typeof(i) !== 'number') {
//       sum += 0;
//     }
//   }
//   console.log(sum);
//   return sum;
// }

// addNumbers({
//   "one": 1,
//   "two": "2",
//   "three": 3
// });
// {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
// for (var key in result)
// function countLettersInString(str) {
//   const arrOfString = str.split('');
//   const result = {};

//   arrOfString.forEach(function(a){
//     result[a] = result[a] + 1 || 1;
//   });
  
//   console.log(result);
// }
// // console.log(result);
// countLettersInString('arithmetics');


// Повертає:
// [ "ROBOT",
// "OBOTR",
// "BOTRO",
// "OTROB",
// "TROBO" ]

// function scrollingText(word) {
//   const result = [];
//   let res = word.toUpperCase();
//   result.push(res);
  
//   for (let i = 0; i < word.length; i++) {

//     console.log(res);
//     if (res[i] !== word[0]) {

//       let first = res[i];  
//       res = res.slice(i + 1) + first;
//       res = res.padStart(word.length, `${res[i]}`);
//       console.log(res);
//       result.push(res);
//     }
    
    
    
//   }
//   console.log(result);
//   return result;
//   // var n = str.replace("Microsoft", "Schoolsw3");
//   // var text2 = text1.toUpperCase()
// }
// scrollingText("robot")
// console.log(res.padEnd(word.length, first));
//     console.log(res);

// function scrollingText(word) {
//   const strInUp = word.toUpperCase();
//   let result = [];

//   for (let i = 0; i < word.length; i++) {
//     result.push(strInUp.substring(i) + strInUp.substring(0, i));

//     console.log(strInUp.substring(0, i));
//   }
//   console.log(result);
//   return result;
// }
// scrollingText("robot")

// function sumObjects() {
//   const allObj = [...arguments];
//   const a = Object.entries(allObj);

  
//   console.log(allObj);

//   console.log(a[0]);

  
//   // console.log(result);
// }
// sumObjects({a: 2, b: 4},
//   {a: 2, b: 10},
//   {d: -5});

// function sumObjects() {
//   const result = {};
//   const allObj = [...arguments];

// for (let i = 0; i <allObj.length; i++) {
//   const aentr = Object.entries(allObj[i]);
//   const aKey = Object.keys(allObj[i]);
//   const aValues = Object.values(allObj[i]);
//   // console.log(aentr);
//   // console.log(aKey);
//   // console.log(aValues);
//   console.log(allObj[i]);
//   if (allObj[i].keys === allObj[i + 1].keys) {
//     allObj[i].values= allObj[i].values + allObj[i + 1].values;
//     result[i] = allObj[i].values;
//   }
// }
  

//   return result;
// }
// sumObjects({a: 2, b: 4}, {a: 2, b: 10}, {d: -5});

// for (let i = 0; i )

// Object.entries(prices).map(([key, value]) => [key, value * 2])

// const sumTotal = arr =>
//   arr.reduce((sum, { price, quantity }) => sum + price * quantity, 0)

// const data = [
//   { id: 1, price: 30, quantity: 2 },
//   { id: 2, price: 20, quantity: 4 },
//   { id: 3, price: 10, quantity: 2 },
// ]

// const total = sumTotal(data)

// console.log(total) // 160

// function sumObjects() {
//   const findObjects = [...arguments];

//   return findObjects.reduce((result, elem) => {
//     for (const letter in elem) {
//       if (elem.hasOwnProperty(letter))
//         result[letter] = (result[letter] || 0) + elem[letter];
//     }
    
//     return result;
//   }, {});
  
// }

// console.log(sumObjects({a: 2, b: 4}, {a: 2, b: 10}, {d: -5}));

// function getRowWeights(array) {
//   let result = [];

//   if (array.length === 0) {
//     return result.push();
//   }

//   if (array.length === 1) {
//     return result.push(array[0], 0);
//   }

//   let summA = 0;
//   let summB = 0;

//   for (let i = 0; i < array.length; i += 2) {
//     if (array.length % 2 === 0) {
//       summA += array[i] + array[i + 2];
//       console.log(summA);
//       summB += array[i + 1] + array[i + 3];
//     } 
//   }
//   result.push(summA, summB);
//   return result;
// }
// console.log(getRowWeights([10]));
// console.log(getRowWeights([10, 85, 90]));
// console.log(getRowWeights([1, 2, 3, 4]));

// function getRowWeights(array) {
//   const result = [];
//   if (!array.length) {
//   return result; 
//   }

//   const firstTeam = [];
//   const secondTeam = [];

//   for (let i = 0; i < array.length; i++) {
//       if (i % 2 === 0) {
//           firstTeam.push(array[i]);
//       } else {
//           secondTeam.push(array[i]);
//       }
//   }

//   const summOfWeight = (weight, currentWeight) => currentWeight + weight;
//   return [
//       firstTeam.reduce(summOfWeight, 0),
//       secondTeam.reduce(summOfWeight, 0),
//   ]
// }

// console.log(getRowWeights([10])) // 10, 0
// console.log(getRowWeights([10, 85, 90])) // 100, 85
// console.log(getRowWeights([8, 5, 9, 3])) // 17, 8



// function getKiller(suspects, dead) {
//   const result = Object.entries(suspects);

//   for ( let i = 0; i < result.length; i++) {
//     for (let j = 0; j < dead.length; j++) {
//       let x = result[i][i];
//       let y = dead[j];

//       let a = x.indexOf(y);
//       let b = x.indexOf(dead[j + 1]);

//       if (a === 2 || b ===2) {
//       }
//     }
//     console.log(result[i][0])
//     return result[i][0];
    
//   }
  
// }



// function getKiller(suspects, dead) {
//   let killer;

//   for (const suspect in suspects) {
//       let found = true
//       for (const victim of dead) {
//           found = suspects[suspect].includes(victim)
//           if (!found) {
//               break
//           }
//       }
//       if (found) {
//           killer = suspect
//           break
//       }
//   }
//   return killer
// }

// console.log(getKiller({'James': ['Jacob', 'Lucas'],
// 'Johnny': ['David', 'Kyle', 'Lucas', 'Bill'],
// 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']));



