import { createNewSelectListOptions } from "./createOperatorSelectListOptionsDom.js";

function createNewSelectList() {
    try {
        const selectList = document.createElement('select');
        selectList.classList.add('operatorList');
        createNewSelectListOptions().forEach((element) => {
            selectList.appendChild(element);
        })
        return selectList;
    } catch(e) {
        console.log(`Failed to create Datalist of options!\n${createNewDataList}`);
    }
}

export {createNewSelectList};