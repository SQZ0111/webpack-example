function removeDonePicture() {
    setTimeout(() => {
        const appContainer = document.querySelector(".container");
        const donePictureElement = document.querySelector(".done-check");
        appContainer.removeChild(donePictureElement);
    },
    5000)
}

export {removeDonePicture};