import "./styles.css";
import { getSeachNode, getListNode } from "./components/element-creator.js";
import { data } from "./data.js";
import { filterList } from "./components/filter.js";
import { ItemLoading } from "./components/elements-loader.js";

const searchIntputNode = getSeachNode();
const listNode = getListNode();

document.querySelector(".search-anchor").append(searchIntputNode);
document.querySelector(".list-app").append(listNode);

const searchInput = searchIntputNode.querySelector(".search-input_task-input");

let actualList = data;
let loadedNumber = 0;
const loadStep = 30;
const elementSize = 20;

function updateListAfterKeypress() {
    actualList = filterList(searchInput.value, data);
    [...document.querySelectorAll(".item")].forEach(element => element.remove());
    ItemLoading(0,29, actualList, listNode);
}

searchInput.addEventListener("keydown", updateListAfterKeypress);

let scrollAnchor = document.querySelector(".list-app").scrollTop
    - document.querySelector(".list-app").offsetHeight;

document.querySelector(".list-app").addEventListener('scroll', e => {
    const { scrollTop } = e.target;
    if (scrollAnchor < scrollTop - elementSize * (loadStep - 2)) {
        scrollAnchor = scrollTop;
        ItemLoading(loadedNumber,loadStep, actualList, listNode);
    }
});

ItemLoading(0,29, actualList, listNode);
