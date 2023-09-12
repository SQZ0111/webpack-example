import { getValueFromInputfield } from "./getValuesInputfieldModule.js";

function getOperandValues() {
    try {
        const calculateForm = document.querySelector("#calculateForm");
       
        calculateForm.addEventListener("submit",(e) => {
            e.preventDefault();
            const inputFields = document.querySelectorAll(".number-input");
            const valuesFromInputs = getValueFromInputfield(inputFields);
            console.log(valuesFromInputs);
            return valuesFromInputs;
    })
    } catch(e) {
        console.log(`Could not get input fields and perform ${getValueFromInputfield}`)
    }
}

export {getOperandValues};