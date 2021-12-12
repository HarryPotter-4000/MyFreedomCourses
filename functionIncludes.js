function includes(oneSymbolStr, twoSymbolStr) {
    for (let symbol of twoSymbolStr) {
        if (symbol === oneSymbolStr) {
            return true;
        } 
    }
    return false;screenLeft    
}
findSymbol('a', 'open');