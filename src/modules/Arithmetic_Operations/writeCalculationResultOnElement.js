import { getValueFromInputfield } from "../Input_Management/getValuesInputfieldModule.js";
import { calculateArithmetic } from "./performArithmeticOperations.js";
import { insertDonePicture } from "../Picture_Mangement/insertPicture.js";
import { removeDonePicture } from "../Picture_Mangement/removePicture.js";

function writeCalculation() {
    try {
        const inputFields = document.querySelectorAll(".number-input");
        const resultTextField = document.querySelector(".result");
        const valuesFromInputs = getValueFromInputfield(inputFields);
        console.log(valuesFromInputs);
        resultTextField.innerHTML = `Calculated Answer: ${calculateArithmetic(valuesFromInputs)}`;
        insertDonePicture();
        removeDonePicture();

    } catch(e) {
        console.log(`Something did not work by writing in ${writeCalculation}`);
    }
}


export {writeCalculation};