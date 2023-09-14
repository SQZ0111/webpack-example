function createNewSelectListOptions() {
    try {
        const operators = ['+','-','*','/'];
        const operatorOptions = [];
        operators.forEach((element) => {
            const optionOperator = document.createElement('option');
            optionOperator.value = element;
            optionOperator.innerHTML = element;
            operatorOptions.push(optionOperator);
        })
        return operatorOptions; 
    } catch(e) {
        console.log('Failed to create Options for Datalist');
    }
}

export {createNewSelectListOptions};