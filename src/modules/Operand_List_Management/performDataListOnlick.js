import { addDatalistOnclick } from "./addDataListDocument.js";

function performAddDataList() {

    const operatorButton = document.querySelector('.operator');
    operatorButton.addEventListener("click",addDatalistOnclick);
}

export {performAddDataList};