function getOperand() {
    const operand = localStorage.getItem('operator');
    return operand;
}

export {getOperand};