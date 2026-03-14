import { useEffect, useState } from "react"
import { detectImage, detectText } from "~lib/api"
import { formatImageDetection, formatTextDetection } from "~lib/formatters"
import type { PanelState } from "~lib/types"
import { IdleScreen } from "./IdleScreen"
import { LoadingScreen } from "./LoadingScreen"
import { SuccessScreen } from "./SuccessScreen"
import { ErrorScreen } from "./ErrorScreen"

function IndexSidePanel() {
  const [data, setData] = useState("")
  const [state, setState] = useState<PanelState>({ status: "idle" });

  useEffect(() => {
    // Initialising the first state we get
    chrome.storage.session.get("panelState").then(({ panelState }) => {
      if (panelState) setState(panelState);
    });

    chrome.storage.onChanged.addListener((changes) => {
      if (changes.panelState?.newValue) {
        setState(changes.panelState?.newValue);
      }
    });
  }, []);

  const DynamicStateComponent = () => {
    switch(state.status) {
      case "idle": return <IdleScreen />
      case "loading": return <LoadingScreen />
      case "success": return <SuccessScreen />
      case "error": return <ErrorScreen />
      default: break
    }
  };

  return (
    <>
      <DynamicStateComponent />
    </>
  );
}

export default IndexSidePanel