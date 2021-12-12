function reverse(randomArray) {
    const reversed = [];
    for (let i = randomArray.length - 1; i >= 0; i--) {
        reversed.push(randomArray[i]);
    }
    return reversed;
}
