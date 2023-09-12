/**
 * Takes multiple arguments and returns result form mathematical operation
 * @param {string} operator - first argument is the mathematical operator.
 * @param {number} numbers - number(s) to calculate with.
 */
function rechner() {
    let args = Array.from(arguments)   
    switch(args[0]) {
        case "+": {
            return args.slice(1).reduce((prev,current) => prev + current,0);
            break;
        }
        case "-": {
            return args.slice(1).reduce((prev,current) => prev - current);
            break;
        }
        case "_":
            return null;
            break;
    }
}

export {rechner}