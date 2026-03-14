import { useEffect, useState } from "react"
import "../style.css"

export function LoadingScreen() {
  const words = ['Inspecting elements...', 'Analysing data...', 'Evaluating score...', 'Finalising...'];
  const [currentWord, setCurrentWord] = useState(0);
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((counter) => {
        if (counter >= 100) {
          // Stop at 100 for progress bar max width
          clearInterval(interval);
          return 100;
        }
        if (counter === 25 || counter === 50 || counter === 75) {
          // Cycle to another word
          setCurrentWord((prev) => prev + 1);
        }
        // Increase percentage by 1 after 67ms
        return counter + 1;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [])


  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-800">
      {/* Cycle through each word */}
      <p className="text-lg text-white pb-3 tracking-widest uppercase">
        {words[currentWord]}
      </p>

      {/* Progress Bar background */}
      <div className="w-80 h-2 bg-gray-200 rounded-full overflow-hidden">
        {/* Progress Bar fill */}
        <div
          className="h-full bg-green-600 rounded-full transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-white pt-3">
        {progress}%
      </p>
    </div>
  )
}