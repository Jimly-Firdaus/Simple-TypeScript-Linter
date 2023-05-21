export const constPattern = /const [a-zA-Z_$][a-zA-Z_$0-9]* *: *[a-zA-Z_$][a-zA-Z_$0-9]* *= *.+;?/;
export const varPattern = /var [a-zA-Z_$][a-zA-Z_$0-9]* *: *[a-zA-Z_$][a-zA-Z_$0-9]* *= *.+;?/;
export const letPattern = /let [a-zA-Z_$][a-zA-Z_$0-9]* *: *[a-zA-Z_$][a-zA-Z_$0-9]* *= *.+;?/;
export const funcDefPattern = /function [a-zA-Z_$][a-zA-Z_$0-9]*\([a-zA-Z_$][a-zA-Z_$0-9]*( *: *[a-zA-Z_$][a-zA-Z_$0-9]*)?(, *[a-zA-Z_$][a-zA-Z_$0-9]*( *: *[a-zA-Z_$][a-zA-Z_$0-9]*)?)*\) *: *[a-zA-Z_$][a-zA-Z_$0-9]* *{[^}]*}/;
export const arrowFuncPattern = /[a-zA-Z_$][a-zA-Z_$0-9]* *= *\([a-zA-Z_$][a-zA-Z_$0-9]*( *: *[a-zA-Z_$][a-zA-Z_$0-9]*)?(, *[a-zA-Z_$][a-zA-Z_$0-9]*( *: *[a-zA-Z_$][a-zA-Z_$0-9]*)?)*\) *: *[a-zA-Z_$][a-zA-Z_$0-9]* *=> *(?:[^{].+|{[^}]*return[^}]*})/;
