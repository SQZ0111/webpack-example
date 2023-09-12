import { createDataListOptions } from "./createOptions.js";

function createNewDataList() {
    try {
        const selectList = document.createElement('select');
        selectList.classList.add('operatorList');
        createDataListOptions().forEach((element) => {
            selectList.appendChild(element);
        })
        return selectList;
    } catch(e) {
        console.log("Failed to create Datalist of options!");
    }
}

export {createNewDataList};