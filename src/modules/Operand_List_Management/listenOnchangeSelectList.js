import { storeSelectValue } from "../Storage_and_Retrieval/storeSelectedValueInLocalStorage.js";

function listenChangeStoreValue () {
    const operatorList = document.querySelector('.operatorList');

    operatorList.addEventListener("change",storeSelectValue);
}

export {listenChangeStoreValue};