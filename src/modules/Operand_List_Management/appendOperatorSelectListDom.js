import { createNewSelectList } from "./createOperatorSelectListDom.js";

function appendSelectList() {
    try {
        const body = document.querySelector('.container');
        const selectList = createNewSelectList();
        body.appendChild(selectList)
    } catch(e) {
        console.log("Failed to append Datalist to body");
    }
}

export {appendSelectList};