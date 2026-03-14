import { useState } from "react"
import { detectImage, detectText } from "~lib/api"
import { formatImageDetection, formatTextDetection } from "~lib/formatters"
import type { PanelState } from "~lib/types"

function IndexSidePanel() {
  const [data, setData] = useState("")
  const [state, setState] = useState<PanelState>({ status: "idle" });


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        hellO!
      </h2>
    </div>
  )
}

export default IndexSidePanel