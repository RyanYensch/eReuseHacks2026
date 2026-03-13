// Required for Plasmo to treat the file as a module
export {};

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "context-menu-item",
    title: "Detect AI",
    contexts: ["all"], // Only show when text is selected
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "context-menu-item") {
    console.log("Selected text:", info.selectionText);
    // Add your action here
  }
});
