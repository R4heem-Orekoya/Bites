import React from 'react'
import HeroImage from '../assets/her03.png'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className='hero flex bg-stone-100 min-h-[calc(100vh-80px)] w-screen'>
        <div className='w-[1000px] max-w-[90%] mx-auto grid  gap-4 grid-cols-1 md:grid-cols-2 items-center'>
            <div className='flex-1 max-md:flex max-md:items-center max-md:flex-col max-md:text-center py-10'>
                <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl font-bold">We Serve The Taste You Love</h1>
                <p className='text-lg max-lg:text-base max-md:text-sm font-medium my-10 '>
                    This is a type of restaurant which typically serves
                    food and drinks, in addition to light refreshments such 
                    as baked goods or snacks. The term comes from the rench 
                    meaning food. 
                </p>

                 <button className='px-8 py-3 rounded-[35px] flex items-center gap-2 bg-red-500 text-white text-lg max-sm:text-base max-sm:px-6 font-medium group'>
                    View Menu
                    <ChevronRight size={25} className='group-hover:translate-x-2 duration-500'/>
                 </button>
            </div>

            <div className='aspect-square'>
                <img src={HeroImage} alt="hero-image" className='w-full h-full object-cover max-md:object-contain max-sm:object-cover drop-shadow-2xl'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
