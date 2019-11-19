import { getItem } from "./element-creator.js";
import { data } from "./data.js";

export function itemLoadingApi() {

    let currentData = data

    const filterList = (str) => currentData = data.filter(element => element.includes(str));

    function itemLoading(firstNumber, secondNumber, node) {
        currentData
            .slice(firstNumber, firstNumber + secondNumber)
            .forEach(element => node.append(getItem(element)));
    }

    return{
        filterList,
        itemLoading
    };
}