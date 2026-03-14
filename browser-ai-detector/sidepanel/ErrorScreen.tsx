// @ts-ignore
import robotImage from "url:~assets/thinking-robot-error.png"

export function ErrorScreen({ error }) {
  return (
    <div className="flex flex-col justify-center h-screen bg-gray-800">
      <div className='flex items-center flex-col text-center gap-10'>
        <div className='flex flex-col font-sans gap-2 is-[90vw] sm:is-[unset]'>
          <h1 className="mb-4 text-6xl font-bold text-white text-heading md:text-7xl lg:text-8xl">
            ERROR
          </h1>
          <p className="text-2xl font-medium text-white text-body lg:text-xl pb-2">Please Try Again Later!</p>
          <p className="text-lg font-normal text-white text-body lg:text-xl pb-4">{error}</p>
        </div>
        {/* https://www.streamlinehq.com/illustrations/bruxelles-duotone/technology?icon=ico_7bTFCA1Rl4deODdX */}
        <img
          alt='Streamline Image'
          src={robotImage}
          className='object-cover bs-[400px] md:bs-[450px] lg:bs-[500px] w-50% h-50%'
        />
      </div>
    </div>
  )
};