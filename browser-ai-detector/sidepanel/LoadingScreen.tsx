import { RotatingLines } from 'react-loader-spinner';
import "../style.css"

export function LoadingScreen() {
  const MyLoader = () => (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-800">
    <MyLoader />
      <p className="text-lg text-white pt-3 tracking-widest uppercase">
        Loading...
      </p>
    </div>
  )
}