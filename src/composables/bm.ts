const lastOccurrence = (pattern: string): Map<string, number> => {
    let last = new Map<string, number>();
    for (let i = 0; i < pattern.length; i++) {
        last.set(pattern[i], i);
    }
    return last;
}

export const boyerMoore = (text: string, pattern: string): number => {
    let last = lastOccurrence(pattern);
    let n = text.length;
    let m = pattern.length;
    let i = m - 1;
    if (i > n - 1) {
        return -1;
    }
    let j = m - 1;
    while (i <= n - 1) {
        if (pattern[j] == text[i]) {
            if (j == 0) { // Match found
                if (n == m) {
                    return -2; // EXACT MATCH
                } else {
                    return i;
                }
            } else {
                i--;
                j--;
            }
        } else {
            let lo = last.get(text[i]) || -1;
            i += m - Math.min(j, 1 + lo);
            j = m - 1;
        }
    }
    return -1;
}
