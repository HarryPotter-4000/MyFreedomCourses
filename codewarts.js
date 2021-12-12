function rank(card) {
    
    let result = parseInt(card[0], 10);
    console.log(result);
    if (card[0] === 'T') {
        return result = 10;
    } else if (card[0] === 'J') {
        return result = 11;
    } else if (card[0] === 'Q') {
        return result = 12;
    } else if (card[0] === 'K') {
        return result = 13;
    } else if (card[0] === 'A') {
        return result = 14;
    } else {
        return result = 0;
    }
    return result;
}
rank('cc');

function getDivisorsCnt(n){
    let counter = 0;
        for (let i = n; i >= 1; i--) {
        if (n % i === 0) {
            counter++;
        }
        }
    return counter;
}

var isAnagram = function(test, original) {
    if (test.length === original.length) {
        return false;
    } 
    let a = test.toUpperCase;
    let b = original.toUpperCase;
    if (a.includes(b)) {
        return true;
    }
}
