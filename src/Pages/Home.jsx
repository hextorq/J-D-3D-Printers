import React from 'react'



export const Home = () => {
  return (
    <div className='bg-[#e8dcc6] text-[#722f37]'>
       <section className='relative flex min-h-[320px] md:min-h-[420px] items-center justify-center bg-cover bg-center px-6 text-center'>
          <div className='absolute inset-0'/>
          <div className='relative'>
            <h1 className='text-5xl font-bold md:text-8xl'>
              J&D-3D-Printers
            </h1>
            <p className="mt-6 text-lg md:mt-10 md:text">The premier provider quality 3D printing services</p>
          </div>
       </section>
    </div>
  )
}
