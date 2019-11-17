import "./styles.css";
import { getSeachNode, getListNode, getItem } from "./components/element-creator";
import { data } from "./data.js";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

const searchIntputNode = getSeachNode();
const listNode = getListNode();

document.querySelector(".search-anchor").append(searchIntputNode);
document.querySelector(".list-app").append(listNode);

const searchInput = searchIntputNode.querySelector(".search-input_task-input");

let actualList = data;
let loadedNumber = 0;
const loadStep = 30;
const elementSize = 20;

const filterList = (str) => {
    actualList = data.filter(element => element.includes(str))
};

function ItemLoading(firstNumber,secondNumber) {
    actualList
        .slice(firstNumber, firstNumber + secondNumber)
        .forEach(element => listNode.append(getItem(element)));
    loadedNumber += secondNumber;
}

function updateListAfterKeypress() {
    filterList(searchInput.value);
    [...document.querySelectorAll(".item")].forEach(element => element.remove());
    ItemLoading(0,29);
}

searchInput.addEventListener("keydown", updateListAfterKeypress);

let scrollAnchor = document.querySelector(".list-app").scrollTop
    - document.querySelector(".list-app").offsetHeight;

document.querySelector(".list-app").addEventListener('scroll', e => {
    const { scrollTop } = e.target;
    if (scrollAnchor < scrollTop - elementSize * (loadStep - 2)) {
        scrollAnchor = scrollTop;
        ItemLoading(loadedNumber,loadStep);
    }
});

ItemLoading(0,29);
