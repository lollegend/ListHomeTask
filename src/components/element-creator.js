import { templateSearchInput, templateItemList, templateItem } from "./templates/templates.js";

const createTemplateNode = (template, selector) => {
    const item = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector(selector);
    return item;
  };

export const getSeachNode = () => createTemplateNode(templateSearchInput, ".search-input");
export const getListNode = () => createTemplateNode(templateItemList, ".item-list");
export const getItem = (taskContent) => createTemplateNode(templateItem(taskContent), ".item");