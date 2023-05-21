import * as fs from 'fs';
import { processSyntax } from "./composables/process";

fs.readFile('./test/test.ts', 'utf8', (err, data: string) => {
    if (err) {
        console.error(err);
        return;
    }
    let test: string[] = data.split(/\r?\n(?![^{]*})/).map(line => line.trim());
    let counteredError: number = 0;
    const red = '\x1b[31m';
    const green = '\x1b[32m';
    const reset = '\x1b[0m';
    test.forEach((ele, index) => {
        ele = ele.trim();
        if (ele.length !== 0) {
            if (!processSyntax(ele)) {
                counteredError++;
                console.log(`${red}Invalid syntax on:\n ${ele}${reset}`);
            }
        }
    })
    if (counteredError === 0) {
        console.log(`${green}No Invalid Syntax!${reset}`);
    }
});
