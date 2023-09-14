import { createArrayFromValues } from "./createArrayFromInputFieldValues.js";

function getInputFieldNumbersAsArray() {
    try {
        const calculateForm = document.querySelector("#calculateForm");
       
        calculateForm.addEventListener("submit",(e) => {
            e.preventDefault();
            const inputFields = document.querySelectorAll(".number-input");
            const valuesFromInputs = createArrayFromValues(inputFields);
            console.log(valuesFromInputs);
            return valuesFromInputs;
    })
    } catch(e) {
        console.log(`Could not get input fields and perform ${getValueFromInputfield}`)
    }
}

export {getInputFieldNumbersAsArray};