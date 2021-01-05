import {buildNewList} from "./DOMBuilding";

const nameField = document.querySelector('#popup-list-name-input');
const newListPopup = document.querySelector('.new-list-popup');

class List {
    constructor(name) {
        this.name = name;
    }
}

function addList() {
    if(nameField.value != "") {
        let newList = new List(nameField.value);
        buildNewList(newList.name);
        newListPopup.style.display = "none";
        console.log(newList);
    }
}

export {addList}