import { addSelectListOnclick } from "./addOperatorSelectListOnclickDom.js";

function performAddOperatorSelectList() {

    const operatorButton = document.querySelector('.operator');
    operatorButton.addEventListener("click",addSelectListOnclick);
}

export {performAddOperatorSelectList};