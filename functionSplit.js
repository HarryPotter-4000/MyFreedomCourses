function split(source, separator) { 
    const result = [];
    let chunk = '';
    let shouldAdd = false;
    for (let i = 0; i < source.length; i++) {
        const currentChar = source.charAt(i);
        if (currentChar === separator) {
            shouldAdd = true;
        } else {
            chunk += currentChar;
        }
        if (i === source.length - 1) {
            shouldAdd = true;
        }
        if (shouldAdd) {
            result.push(chunk);
            chunk = '';
            shouldAdd = false;
        }
    }
    return result;
}

// Tests
console.log(split("Hello@world", "@") === ["Hello", "world"]);
console.log(split("Hello", "@") === ["Hello"]);
console.log(split("  Hello|world", "|") === ["  Hello", "world"])
