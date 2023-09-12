import { addInArray, subtractInArray, multiplyInArray, divisionInArray } from "./arithmeticOperations.js";
import { getOperand } from "../Storage_and_Retrieval/getOperandFromLocalStorage.js";

function calculateArithmetic(numbers) {
    const operand = getOperand();
    try {
        if(operand !== null || numbers.length >=2) {
            switch(operand) {
                case "+": {
                    return addInArray(numbers);
                }
                case "-": {
                    return subtractInArray(numbers);
                }
                case "*": {
                    return multiplyInArray(numbers);
                }
                case "/": {
                    return divisionInArray(numbers);
                } 
            }
        }
        else {
            throw new Error("Numbers given are either not an array or compromised");
        }
    } catch(e) {
        console.log(`Error: ${e}`);
    }
}


export {calculateArithmetic};