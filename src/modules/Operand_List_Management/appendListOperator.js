import { createNewDataList } from "./createDataList.js";

function appendDataList() {
    try {
        const body = document.querySelector('.container');
        const selectList = createNewDataList();
        body.appendChild(selectList)
    } catch(e) {
        console.log("Failed to append Datalist to body");
    }
}

export {appendDataList};