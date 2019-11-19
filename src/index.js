import "./styles.css";
import { getSeachNode, getListNode } from "./components/element-creator.js";
import { itemLoadingApi } from "./components/elements-loader.js";
import { dismemberList } from "./components/elements-dismember.js";
import { loadStep, elementSize, elementPreloadBorder } from "./config.js";


const searchIntputNode = getSeachNode();
const listNode = getListNode();

const itemLoader = itemLoadingApi();
const app = document.querySelector(".list-app");

app.append(listNode);
document.querySelector(".search-anchor").append(searchIntputNode);

function updateListAfterKeypress(e) {
    dismemberList();
    itemLoader.filterList(e.target.value);
    app.scrollTop = 0;
    itemLoader.itemLoading(0, 29, listNode);
}

searchIntputNode.querySelector(".search-input_task-input")
    .addEventListener("keyup", updateListAfterKeypress);

app.addEventListener('scroll', e => {
    const { scrollTop, scrollHeight, offsetHeight } = e.target;
    if (scrollHeight - elementSize * elementPreloadBorder < (scrollTop + offsetHeight)) {
        itemLoader.itemLoading(
            [...document.querySelectorAll(".item")].length,
            loadStep,
            listNode
        );
    }
});

//first load
itemLoader.itemLoading(0, 29, listNode);
