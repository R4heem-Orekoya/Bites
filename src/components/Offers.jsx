import React from 'react'
import Vegetables from '../assets/vegetables.png'
import Meat from '../assets/meat.png'
import Pasta from '../assets/pasta.png'
import Seafood from '../assets/seafood.png'

import { ChevronRight } from 'lucide-react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Offers = () => {
  return (
    <section className='py-16 w-[1000px] max-w-[90%] mx-auto'>
        <h2 className='text-4xl max-md:text-3xl font-bold'>Hot Offers</h2>

        <Slider />
    </section>
  )
}


const Slider = () => (
    <Swiper
    modules={[Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    className='mt-10 pb-[50px]'

    breakpoints={{
        750: {
          slidesPerView: 2,
        },
    }}
  >
    <SwiperSlide className='h-[300px] bg-yellow-400 flex items-center p-6 justify-between rounded-2xl shadow-sm'>
        <div className='flex flex-col gap-6 items-start'>
            <h3 className='text-3xl font-bold'>All Vegetable Item</h3>
            <p className='text-xl font-semibold'>SALE 50% OFF</p>
            <button className='px-8 py-[0.6rem] rounded-[35px] flex items-center gap-2 bg-red-500 text-white text-lg max-sm:text-base max-sm:px-6 font-medium group'>
                Shop Now
                <ChevronRight size={25} className='group-hover:translate-x-2 duration-500'/>
            </button>
        </div>
        <img src={Vegetables} alt="vegetable" className='w-[50%] object-cover'/>
    </SwiperSlide>
    <SwiperSlide className='h-[300px] bg-red-500 text-white flex items-center p-6 justify-between rounded-2xl shadow-sm'>
        <div className='flex flex-col gap-6 items-start'>
            <h3 className='text-3xl font-bold'>All Meat Item</h3>
            <p className='text-xl font-semibold'>SALE 60% OFF</p>
            <button className='px-8 py-[0.6rem] rounded-[35px] flex items-center gap-2 bg-yellow-400 text-white text-lg max-sm:text-base max-sm:px-6 font-medium group'>
                Shop Now
                <ChevronRight size={25} className='group-hover:translate-x-2 duration-500'/>
            </button>
        </div>
        <img src={Meat} alt="meat" className='w-[50%] object-contain'/>
    </SwiperSlide>
    <SwiperSlide className='h-[300px] bg-yellow-400 flex items-center p-6 justify-between rounded-2xl shadow-sm'>
        <div className='flex flex-col gap-6 items-start'>
            <h3 className='text-3xl font-bold'>All Seafood Item</h3>
            <p className='text-xl font-semibold'>SALE 40% OFF</p>
            <button className='px-8 py-[0.6rem] rounded-[35px] flex items-center gap-2 bg-red-500 text-white text-lg max-sm:text-base max-sm:px-6 font-medium group'>
                Shop Now
                <ChevronRight size={25} className='group-hover:translate-x-2 duration-500'/>
            </button>
        </div>
        <img src={Seafood} alt="seafood" className='w-[40%] object-contain'/>
    </SwiperSlide>
    <SwiperSlide className='h-[300px] bg-red-500 flex items-center p-6 justify-between rounded-2xl shadow-sm'>
        <div className='flex flex-col gap-6 items-start'>
            <h3 className='text-3xl font-bold'>All Pasta Item</h3>
            <p className='text-xl font-semibold'>SALE 45% OFF</p>
            <button className='px-8 py-[0.6rem] rounded-[35px] flex items-center gap-2 bg-yellow-400 text-white text-lg max-sm:text-base max-sm:px-6 font-medium group'>
                Shop Now
                <ChevronRight size={25} className='group-hover:translate-x-2 duration-500'/>
            </button>
        </div>
        <img src={Pasta} alt="pasta" className='w-[40%] object-contain'/>
    </SwiperSlide>
  </Swiper>
)

export default Offers
