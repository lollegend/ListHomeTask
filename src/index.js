import "./styles.css";
import { getSeachNode, getListNode } from "./components/element-creator.js";
import { data } from "./data.js";
import { filterList } from "./components/filter.js";
import { itemLoading } from "./components/elements-loader.js";

const searchIntputNode = getSeachNode();
const listNode = getListNode();

document.querySelector(".search-anchor").append(searchIntputNode);
document.querySelector(".list-app").append(listNode);

const searchInput = searchIntputNode.querySelector(".search-input_task-input");

const loadStep = 30;
const elementSize = 20;

function updateListAfterKeypress() {
    [...document.querySelectorAll(".item")].forEach(element => element.remove());
    itemLoading(0,29, filterList(searchInput.value, data), listNode);
}

searchInput.addEventListener("keydown", updateListAfterKeypress);

let scrollAnchor = document.querySelector(".list-app").scrollTop
    - document.querySelector(".list-app").offsetHeight;

document.querySelector(".list-app").addEventListener('scroll', e => {
    const { scrollTop } = e.target;
    if (scrollAnchor < scrollTop - elementSize * (loadStep - 2)) {
        scrollAnchor = scrollTop;
        itemLoading([...document.querySelectorAll(".item")].length
            ,loadStep
            , filterList(searchInput.value, data)
            , listNode);
    }
});

//first load
itemLoading(0,29, filterList(searchInput.value, data), listNode);
