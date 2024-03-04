import React from 'react'

function Amigos({img}) {
  return (
    <>
        <article className='flex gap-2 items-center p-3 bg-white rounded-sm'>
            <div className='w-[36px] h-[36px] rounded-full overflow-hidden'>
                <img className='w-ful h-full object-cover' src={img} alt="perfil" />
            </div>
        <div>
        <h1 className='text-xs font-bold'>Lizzy Montejo Simuta</h1>
        <p className='text-xs text-gray-600'>Ing. Sistemas computacionales</p>
        </div>
        </article>
    </>
  )
}

export default Amigos