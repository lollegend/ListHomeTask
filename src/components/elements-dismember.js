export function dismemberList() { 
    [...document.querySelectorAll(".item")].forEach(element => element.remove()); 
}