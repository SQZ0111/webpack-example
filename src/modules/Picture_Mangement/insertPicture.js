import done from "../../assets/done.jpg"

function insertDonePicture() {
    const appContainer = document.querySelector(".container");
    const imgElement = document.createElement("img");
    imgElement.src = done;
    imgElement.classList.add('done-check');
    appContainer.appendChild(imgElement);
}


export {insertDonePicture};