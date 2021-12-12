function contains(randomArray, randomValue) {
    let found = false;
    for (const item of randomArray) {
        if (randomValue === item) {
            found = true;
            break;
        }
    }
    return found;
}
