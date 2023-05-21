import { boyerMoore } from "./bm";
import { 
    constPattern, 
    letPattern, 
    varPattern, 
    funcDefPattern, 
    arrowFuncPattern } from "./regex";

export const processSyntax = (text: string): boolean => {
    if (boyerMoore(text, "const") !== -1) {
        return constPattern.test(text) || arrowFuncPattern.test(text);
    }
    if (boyerMoore(text, "var") !== -1) {
        return varPattern.test(text) || arrowFuncPattern.test(text);
    }
    if (boyerMoore(text, "let") !== -1) {
        return letPattern.test(text) || arrowFuncPattern.test(text);
    }
    if (boyerMoore(text, "function") !== -1) {
        return funcDefPattern.test(text);
    }

    // regular string
    return true;
}
