import { appendDataList } from "./appendListOperator.js";
import {listenChangeStoreValue} from "../Operand_List_Management/listenOnchangeSelect.js";
import { removeDataList } from "./removeDataList.js";


function addDatalistOnclick() { 
    addDatalistOnclick.didRun ? removeDataList() : addDatalistOnclick.didRun = true;
    appendDataList();
    setTimeout(() => {
        removeDataList();
    },15000)
    listenChangeStoreValue();

}

export {addDatalistOnclick};