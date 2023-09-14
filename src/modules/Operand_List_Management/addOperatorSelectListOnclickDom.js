import { appendSelectList } from "./appendOperatorSelectListDom.js";
import {listenChangeStoreValue} from "./listenOnchangeSelect.js";
import { removeSelectList } from "./removeOperatorSelectListDom.js";


function addSelectListOnclick() { 
    addSelectListOnclick.didRun ? removeSelectList() : addSelectListOnclick.didRun = true;
    appendSelectList();
    setTimeout(() => {
        removeSelectList();
    },15000)
    listenChangeStoreValue();

}

export {addSelectListOnclick};