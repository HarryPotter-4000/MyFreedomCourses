// function replace(haystack, needle, replacement) { 
//     let result = '';
//     let chunk = '';
//     let needleChank = '';
//     let shouldAdd = false;
//     for (let i = 0; i < source.length; i++) {
//             const currentChar = haystack.charAt(i);
//             if (currentChar  needleChank(0)) {
//                 shouldAdd = true;
//             } else {
//                 chunk += currentChar;
//             }
//             if (i === source.length - 1) {
//                 shouldAdd = true;
//             }
//             if (shouldAdd) {
//                 result.push(chunk);
//                 chunk = '';
//                 shouldAdd = false;
//             }
//         }


function replace(str, change, replacement) {
    if (change.length > str.length) {
        return str;
    }
    const resultArray = [];
    let arrayStr = str.split('');
    let arrayChange = change.split('');
    for (let i = 0; i < arrayStr.lenth; i++) {
        for (let j = 0; j < arrayChange.length; j++) {
            if (arrayStr[i] == arrayChange[0]) {
                if (arrayStr[i] == arrayChange[j] && arrayStr[i] != arrayChange[j]) {
                        break;
                }
                resultArray.push(arrayStr[i])ф
                
            }
        }
    }
}

replace('Hello my life', 'my', '');
console.log(resultArray);

resultArray.splice(arrayStr[i], '');

