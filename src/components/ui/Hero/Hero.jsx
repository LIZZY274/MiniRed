import React from 'react'
import com from '../../../assets/com.jpeg'

function Hero() {
  return (
    <>
    <section className='w-full h-auto bg-[#D9D9D9] p-2 rounded-lg border'>
    <article className='flex gap-2 items-center p-3 rounded-sm'>
            <div className='w-[36px] h-[36px] rounded-full overflow-hidden'>
                <img className='w-ful h-full object-cover' src="" alt="perfil" />
            </div>
        <div>
        <h1 className='text-xs font-bold'>Lizzy Montejo Simuta</h1>
        <p className='text-xs text-gray-600'>Ing. Sistemas computacionales</p>
        </div>
        </article>

        <div className='p-3'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam labore, beatae ab officiis incidunt quisquam blanditiis!</p>
        </div>
        <div className='w-[376px] h-[276px] p-2'>
            <img className='w-full h-full object-cover ' src={com} alt="" />
        </div>

        <div className='p-3'>
            <ul className='flex gap-3'>
                <li>
                    <a href=""><img src="" alt="" />10 comentario</a>
                </li>
                <li>
                    <a href=""><img src="" alt="" />10 comentario</a>
                </li>
                <li>
                    <a href=""><img src="" alt="" />10 comentario</a>
                </li>
                
            </ul>
        </div>
    </section>
    </>
  )
}

export default Hero