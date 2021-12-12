function intersection(arrayOne, arrayTwo) {
    const common = [];
    for (const one of arrayOne) {
        for (const two of arrayTwo) {
            if (one === two) {
                common.push(one);
            }
        }
    }
    return common;
}
