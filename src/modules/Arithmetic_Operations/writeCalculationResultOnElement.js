import { createArrayFromValues } from "../Input_Management/createArrayFromInputFieldValues";
import { calculateArithmetic } from "./performArithmeticOperations.js";
import { insertDonePicture } from "../Picture_Mangement/insertPictureDom.js";
import { removeDonePicture } from "../Picture_Mangement/removePictureDom.js";

function writeCalculation() {
    try {
        const inputFields = document.querySelectorAll(".number-input");
        const resultTextField = document.querySelector(".result");
        const valuesFromInputs = createArrayFromValues(inputFields);
        console.log(valuesFromInputs);
        resultTextField.innerHTML = `Calculated Answer: ${calculateArithmetic(valuesFromInputs)}`;
        insertDonePicture();
        removeDonePicture();

    } catch(e) {
        console.log(`Something did not work by writing in ${writeCalculation}`);
    }
}


export {writeCalculation};