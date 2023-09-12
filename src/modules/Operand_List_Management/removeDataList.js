function removeDataList() {
    try {
        const dataList = document.querySelector('.operatorList');
        const container = document.querySelector('.container');
        container.removeChild(dataList);
    } catch(e) {
        console.log(`Could not remove datalist from container ${removeDataList}`);
    }
}

export {removeDataList};