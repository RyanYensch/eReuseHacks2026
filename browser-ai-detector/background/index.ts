import { detectText, detectImage } from "~lib/api";
import type { AiDetectRequest, PanelState } from "~lib/types";
import type { TextApiResponse } from "../../shared/types/textApi";
import type { ImageApiResponse } from "../../shared/types/imageApi";
import { formatImageDetection, formatTextDetection } from "~lib/formatters";
import { fakeImageApiCall, fakeTextApiCall } from "~lib/fakeApiCalls";

// Required for Plasmo to treat the file as a module
export {};

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "context-menu-item",
    title: "Detect AI",
    contexts: ["image", "selection"] // Only selects images and text, can add for video later
  });
});

const handleApiCall = async (info) => {
  // Handle AI detection API calls
  if (info.mediaType == "image") {
    // Handle image
    try {
      // TODO: Uncomment the API calls for real usage
      // const res = await detectImage(info.Url);

      const res = await fakeImageApiCall();
      const successState: PanelState = {
        status: "success",
        result: formatImageDetection(res)
      };
    } catch (e) {
      // Update state to error
      const errorState: PanelState = {
        status: "error",
        error: e
      };
    }
  } else {
    // Handle text
    console.log("Selected text:", info.selectionText);

    try {
      // TODO: Uncomment the API calls for real usage
      // const res = await detectText(info.selectionText);

      const res = await fakeTextApiCall();
      const successState: PanelState = {
        status: "success",
        result: formatTextDetection(res)
      };
    } catch (e) {
      // Update state to error
      const errorState: PanelState = {
        status: "error",
        error: e
      };
    }
  }
};

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "context-menu-item") {
    const loadingState: PanelState = { status: "loading" };
    await chrome.storage.session.set({ panelState: loadingState });
    await chrome.sidePanel.open({ windowId: tab.windowId });
    handleApiCall(info);
  }
});

