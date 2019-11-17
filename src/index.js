import "./styles.css";
import { getSeachNode, getListNode, getItem } from "./components/element-creator";
import { data } from "./data.js";

const searchIntputNode = getSeachNode();
const listNode = getListNode();

document.querySelector(".search-anchor").append(searchIntputNode);
document.querySelector(".list-app").append(listNode);

const searchInput = searchIntputNode.querySelector(".search-input_task-input");

let actualList = data;
let loadedNumber = 30;
const loadStep = 1;

const filterList = (str) => {
    actualList = data.filter(element => element.includes(str))
};

function updateList() {
    [...document.querySelectorAll(".item")].forEach(element => element.remove());
    actualList
        .slice(0, 29)
        .forEach(element => listNode.append(getItem(element)));
    loadedNumber = 30;
};

updateList("");

function addirionalItemLoading() {
    actualList
        .slice(loadedNumber, loadedNumber + loadStep)
        .forEach(element => listNode.append(getItem(element)));
    loadedNumber += loadStep;
}

function updateListAfterKeypress() {
    filterList(searchInput.value)
    updateList();
}

searchInput.addEventListener("keydown", updateListAfterKeypress);


let windowRelativeBottom = document.documentElement.scrollHeight;
document.querySelector(".list-app").addEventListener('scroll', function () {
    if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
        addirionalItemLoading();
      }
});

