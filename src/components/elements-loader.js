import { getItem } from "./element-creator.js";

export function itemLoading(firstNumber, secondNumber, elements, node) {
    elements
        .slice(firstNumber, firstNumber + secondNumber)
        .forEach(element => node.append(getItem(element)));
}