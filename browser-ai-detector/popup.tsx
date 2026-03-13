import React from 'react'
import "./style.css"

function IndexPopup() {

  return (
    <div className="popup-window">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col py-2 pl-4 w-full bg-slate-400">
          <h1 className='text-2xl font-bold'>AI Detector title...</h1>
          <p className='text-sm'>Brought by eReuse Hacks (Unofficial)</p>

        </div>

        {/* Add a small horizontal line here to add break */}

        {/* USAGE GUIDE */}

        {/* Some gif / video to show a demo */}
        <div className='w-full  flex flex-col items-center justify-center py-40 bg-blue-500'>
          <h2 className='text-2xl font-bold'>Demo video</h2>
          <p>Some screenrecorded demo video here</p>
          <p>Right-click on a webpage and select the extension</p>
        </div>

        <p className='text-bold text-lg'>Awaiting input...</p>
      </div>
    </div>
  )
}

export default IndexPopup
