/**
 * Get DOM Elements values and return as Object 
 * @param {Array} inputfields - DOM Elements with a "value" attribute
 * @returns {Object} Object with values extracted from DOM Elements
 */

function getValueFromInputfield(inputfields) {
    try {
        const extractedValues = [];

        inputfields.forEach((element,index) => {
        
            extractedValues.push(
                element.value
            )
        });

        return extractedValues;
    } catch(e) {
        console.log("Failed to get values inputs");
    }
}

export {getValueFromInputfield};