// Required for Plasmo to treat the file as a module
export {};

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "context-menu-item",
    title: "Detect AI",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "context-menu-item") {
    console.log("Selected text:", info.selectionText);
    // Add more actions here
  }
});
