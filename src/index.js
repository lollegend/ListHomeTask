import "./styles.css";
import { getSeachNode, getListNode } from "./components/element-creator.js";
import { itemLoadingApi } from "./components/elements-loader.js";

const searchIntputNode = getSeachNode();
const searchInput = searchIntputNode.querySelector(".search-input_task-input");
const listNode = getListNode();
const itemLoader = itemLoadingApi();
const app = document.querySelector(".list-app")

app.append(listNode);
document.querySelector(".search-anchor").append(searchIntputNode);

//element output parameters
const loadStep = 30;
const elementSize = 20;
const elementPreloadBorder = 2;

function updateListAfterKeypress() {
    [...document.querySelectorAll(".item")].forEach(element => element.remove());
    itemLoader.filterList(searchInput.value);
    app.scrollTop = 0;
    itemLoader.itemLoading(0, 29, listNode);
}

searchInput.addEventListener("keyup", updateListAfterKeypress);

app.addEventListener('scroll', e => {
    const { scrollTop, scrollHeight, offsetHeight } = e.target;
    if (scrollHeight - elementSize * elementPreloadBorder
        < (scrollTop + offsetHeight)) {
        itemLoader.itemLoading([...document.querySelectorAll(".item")].length
            , loadStep
            , listNode);
    }
});

//first load
itemLoader.itemLoading(0, 29, listNode);
