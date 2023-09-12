function storeSelectValue()  {
    const selectList = document.querySelector('.operatorList');
    const operatorValue = selectList.value;

    localStorage.setItem('operator',operatorValue);
}

export {storeSelectValue};