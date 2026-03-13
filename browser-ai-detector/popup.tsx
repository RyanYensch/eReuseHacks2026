import React from 'react'
import "./style.css"

function IndexPopup() {

  return (
    <div className="popup-window">
      <div className="flex flex-col items-center justify-center">
        {/* Header */}
        <div className="flex flex-col py-2 px-4 w-full bg-gray-800">
          <h1 className='text-3xl'>AI Detector title...</h1>
          <p className='text-lg'>Usage Guide</p>
        </div>

        {/* Horizontal line */}
        <div className="h-px w-full bg-slate-500" />

        {/* Some gif / video to show a demo */}
        <div className='w-full flex flex-col items-center justify-center py-20 gap-10'>
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=aReM6MBodtFcRTC7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className='text-sm text-center px-4'>Right-click on a webpage, select the extension, highlight desired text and images</p>
        </div>

        {/* Horizontal line */}
        <div className="h-px w-full bg-slate-500" />
        
        {/* Footer */}
        <div className="flex flex-row">
          <p className='justify-start align-bottom'>Brought by eReuse Hacks (Unofficial)</p>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
