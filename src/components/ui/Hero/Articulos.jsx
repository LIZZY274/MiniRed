import React from 'react'

function Articulos({images,title,paragraph}) {
  return (
    <>
    <article className='w-full h-[270px] bg-gray-600 relative border-2'>
      <img className='w-full h-full object-cover object-center' src={images} alt="" />
      <div className=' absolute bottom-5 pl-4 flex flex-col gap-3'>
        <h1 className='text-xl text-white font-bold '>{title}</h1>
        <p className='text-white text-xs'>{paragraph}</p>
        <button className='p-1 w-[100px] h-[25px] bg-gray-400 text-xs text-white font-bold rounded-xl'>AquiPelon</button>
      </div>
    </article>
    
    </>
  )
}

export default Articulos