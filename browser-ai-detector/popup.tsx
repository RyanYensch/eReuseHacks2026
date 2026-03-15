import React, { useState } from 'react'
import "./style.css"
import highlightImg from "./assets/highlight-text.png"
import rightClick from "./assets/right-click.png"
import resultText from "./assets/result-text.png"
import sampleImage from "./assets/sample-image.png"
import resultImage from "./assets/result-image.png"

type Tab = "text" | "images"

const textSteps = [
  {
    step: "Step 1",
    description: "Highlight the text you want to analyse",
    img: highlightImg,
  }, { 
    step: "Step 2", 
    description: "Right-click the highlighted text and select 'Detect AI'",
    img: rightClick,
  }, { 
    step: "Step 3", 
    description: "View the analysis results in the sidepanel",
    img: resultText,
  },
]

const imageSteps = [
  {
    step: "Step 1",
    description: "Select an image you want to analyse",
    img: sampleImage,
  }, { 
    step: "Step 2", 
    description: "Right-click the selected image and select 'Detect AI'",
    img: rightClick
  }, { 
    step: "Step 3", 
    description: "View the analysis results in the sidepanel",
    img: resultImage,
  },
]

function IndexPopup() {
  const [activeTab, setActiveTab] = useState<Tab>("text")

  return (
    <div className="popup-window h-full">
      <div className="flex flex-col min-h-full">
        {/* flex-grow so that the footer remains at the bottom */}
        <div className="flex-grow">
          <div className="flex flex-col items-center justify-center">
            {/* Header */}
            <div className="flex justify-center items-center py-4 px-4 w-full bg-gray-800">
              <h1 className='text-3xl font-bold'>
              Browser&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                AI Detector
              </span></h1>
            </div>

            {/* Horizontal line */}
            <div className="h-px w-full bg-slate-500" />
            
            {/* Heading */}
            <p className='text-xl font-bold pt-8 pb-2 text-red-400'>Usage Guide</p>
            <div className="h-px w-60 bg-slate-500" />
            <p className='text-sm text-center mt-2 px-3'>Follow the usage guide below to detect AI-generated text & images in your browser.</p>

            {/* Tab Bar */}
            <div className="flex flex-col w-40 mt-4">
              <div className="flex border-b border-white/10">
                {(["text", "images"] as Tab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 text-xs tracking-widest uppercase transition-colors duration-150
                      ${activeTab === tab
                        ? "text-blue-400 border-b-2 border-blue-400 -mb-px"
                        : "text-gray-400 hover:text-white/60"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-4 mt-4 max-h-64 overflow-y-auto scroll-smooth">
              {/* Display 'text' content */}
              {activeTab === "text" && (textSteps.map(({ step, description, img }) => (
                <div className="flex flex-col gap-4 justify-center items-center mb-6" key={step}>
                  <h2 className="font-bold text-lg underline">{step}</h2>
                  <p className="text-sm">{description}</p>
                  <img src={img} alt={`${step} Image`} className="rounded-md w-full" />
                </div>
              )))}

              {/* Display 'images' content */}
              {activeTab === "images" && (imageSteps.map(({ step, description, img }) => (
                <div className="flex flex-col gap-3 justify-center items-center mb-6" key={step}>
                  <h2 className="font-bold text-lg underline">{step}</h2>
                  <p className="text-sm">{description}</p>
                  <img src={img} alt={`${step} Image`} className="w-full rounded-md" />
                </div>
              )))}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex flex-col items-center justify-center w-full gap-2 mb-2">
          <div className="h-px w-full bg-slate-500" />
          <p className='font-bold'>Brought by eReuse Hacks (Unofficial)</p>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
