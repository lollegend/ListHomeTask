import { getItem } from "./element-creator.js";
import { data } from "./data.js";

export function itemLoadingApi() {

    let currentData = data

    const filterList = (str) => currentData = data.filter(element => element.includes(str));

    function itemLoading(beginIndex, elementsNumber, node) {
        currentData
            .slice(beginIndex, beginIndex + elementsNumber)
            .forEach(element => node.append(getItem(element)));
    }

    return{
        filterList,
        itemLoading
    };
}