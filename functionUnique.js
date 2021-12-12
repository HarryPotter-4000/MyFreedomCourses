function unique(randomArray) {
    const uniqueItems = [];
    for (const randomItem of randomArray) {
        let isUnique = true;
        for (const uniqueItem of uniqueItems) {
            if (randomItem === uniqueItem) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueItems.push(randomItem);
        }
    }
    return uniqueItems;
}
