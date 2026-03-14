import { detectText, detectImage } from "~lib/api";
import type { PanelState } from "~lib/types";
import { formatImageDetection, formatTextDetection } from "~lib/formatters";
import { fakeImageApiCall, fakeTextApiCall, fakeTextApiCallLong } from "~lib/fakeApiCalls";

export { };

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "context-menu-item",
    title: "Detect AI",
    contexts: ["image", "selection"] // Only selects images and text, can add for video later
  });
});

// Handles AI detection and updates status for sidepanel display
const handleApiCall = async (info) => {
  // Handle AI detection API calls
  if (info.mediaType == "image") {
    // Handle image
    // TODO: Uncomment the API calls for real usage
    // const res = await detectImage(info.Url);

    const res = await fakeImageApiCall();
    // const res = await fakeImageErrorApiCall();

    if (res.ok !== false) {
      const successState: PanelState = {
        status: "success",
        result: formatImageDetection(res)
      };
      await chrome.storage.session.set({ panelState: successState });
    } else {
      const errorState: PanelState = {
        status: "error",
        error: res.error
      };
      await chrome.storage.session.set({ panelState: errorState });
    }
  } else {
    // Handle text
    // TODO: Uncomment the API calls for real usage
    // const res = await detectText(info.selectionText);

    // const res = await fakeTextApiCall();
    const res = await fakeTextApiCallLong();

    if (res.ok !== false) {
      const successState: PanelState = {
        status: "success",
        result: formatTextDetection(res)
      };
      await chrome.storage.session.set({ panelState: successState });
    } else {
      // Update state to error
      const errorState: PanelState = {
        status: "error",
        error: res.error
      };
      await chrome.storage.session.set({ panelState: errorState });
    }
  }
};

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "context-menu-item") {
    chrome.sidePanel.open({ windowId: tab.windowId });

    // Filler state before API call is done
    const loadingState: PanelState = { status: "loading" };
    await chrome.storage.session.set({ panelState: loadingState });
    handleApiCall(info);
  }
});