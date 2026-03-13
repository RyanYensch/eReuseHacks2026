// Required for Plasmo to treat the file as a module
export {};

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "context-menu-item",
    title: "Detect AI",
    contexts: ["image", "selection"] // Only selects images and text, can add for video later
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "context-menu-item") {
    console.log("Selected text:", info.selectionText);
    // Add more actions here
  }
});
