import Typography from '@mui/material/Typography'

export function ErrorScreen({ error }) {
  return (
    <div className='flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center gap-10'>
        <div className='flex flex-col gap-2 is-[90vw] sm:is-[unset]'>
          <Typography variant='h4'>An Error Occurend</Typography>
          <Typography className='font-medium text-8xl' color='text.primary'>
            Please Try Again Later!
          </Typography>
          <Typography>{error}</Typography>
        </div>
        <img
          alt='Image'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFz5fYgrepcP696Zm4ZtlldGLC6hEr83HUhDcUWJoyK2l-Rqp2YrkMskunDA_R5Hy-722xpQrOgG2-ZhAuOhuQ1aBRtwaf4jp3tfRNlNQKmg&s=10'
          className='object-cover bs-[400px] md:bs-[450px] lg:bs-[500px]'
        />
      </div>
    </div>
  )
};