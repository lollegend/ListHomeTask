export const templateSearchInput = `
<div class="search-input">
  <input
    type="text"
    placeholder="Type here to search..."
    class="search-input_task-input"
  />
</div>`;

export const templateItemList = `
<div class="item-list"></div>`;

export const templateItem = (contentText) => `<div class="item">
        <div class="item_content">${contentText}</div>
    </div>`;
