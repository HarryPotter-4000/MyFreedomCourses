// 1-------------------------------------
//  let developer1 = {
//    firstName: 'Maria',
//    lastName: 'Y.',
//    country: 'Cyprus',
//    continent: 'Europe',
//    age: 30,
//    language: 'Java'
//  }

//  let developer2 ={
//    firstName: 'Victoria',
//    lastName: 'T.',
//    country: 'Puerto Rico',
//    continent: 'Americas',
//    age: 70,
//    language: 'Python'
//  }
//  function getLocation() {
// 	return this.continent + ' ' + this.country;
// } 
// developer1.getLocation = getLocation;
// console.log(developer1.getLocation())
// developer2.getLocation = getLocation;
// console.log(developer2.getLocation())

// 2-------------------------------------
// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 30, language: 'JavaScript' },
//   { firstName: 'Maria', lastName: 'Y.', country: 'Belarus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// function getNumberMatches(list, value) {
//   let counter = 0;
//   for (let item of list1) {
//     for (let key in item) {
//       if (item[key] === value) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// }
// getNumberMatches(list1, 30)
// 3--------------------------------------
// function getSumm ([x], n) {
//   if (n == 0) return 0

//   return x + getSumm ([x], n - 1)
// }

// const resultGetSumm = getSumm ([2], 10)
// console.log(resultGetSumm)

