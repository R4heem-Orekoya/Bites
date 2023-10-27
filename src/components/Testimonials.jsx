import React from 'react'
import TestimonialImage from '../assets/testimonials.png'
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'
// import client3 from '../assets/client3.png'
// import client4 from '../assets/client4.png'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';


const Testimonials = () => {
  return (
    <section className='py-16 bg-stone-100'>
        <div className='w-[min(1000px,90%)] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
            <div>
                <h3 className='text-xl font-bold text-yellow-400 mb-5'>Testimonials</h3>
                <h2 className='text-5xl max-lg:text-3xl font font-bold leading-tight'>
                    This is What Our Clients Say
                </h2>

                <Slider />
            </div>
            <div className='aspect-square'>
                <img src={TestimonialImage} alt="image" className='w-full aspect-square object-cover'/>
            </div>
        </div>
    </section>
  )
}

const Slider = () => (
    <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        className='mt-12 pb-[50px]'
    >
    <SwiperSlide>
        <p className='text-lg font-normal text-slate-800'>
            "Bites is an awesome place. Food is everything we are.
            It is an extension of nationalist feeling, ethnic feeling, your personal
            history, your province"
        </p>
        <div className='flex items-center gap-6 mt-10'>
            <img src={TestimonialImage} alt="profile" className='w-[60px] aspect-square object-cover rounded-full'/>
            <div>
                <h4 className='text-xl font-bold'>Jeniffer Dobrev</h4>
                <p className='text-base text-slate-700'>Product Designer</p>
                <p className='flex items-center gap-2 text-yellow-400'>
                    <Star className='fill-yellow-400 stroke-yellow-400 animate-bounce' size={15}/>
                    <span>4.9</span>
                </p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <p className='text-lg font-light text-slate-800'>
            "I am someone who loves eating a lot and Bites has a lot options
            from which i can pick from. Their food is also very very good👌."
        </p>
        <div className='flex items-center gap-6 mt-10'>
            <img src={TestimonialImage} alt="profile" className='w-[60px] aspect-square object-cover rounded-full'/>
            <div>
                <h4 className='text-xl font-bold'>Orunsolu Rofiat</h4>
                <p className='text-base text-slate-700'>University Student</p>
                <p className='flex items-center gap-2 text-yellow-400'>
                    <Star className='fill-yellow-400 stroke-yellow-400 animate-bounce' size={15}/>
                    <span>6.5</span>
                </p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <p className='text-lg font-light text-slate-800'>
            "The food at this restaurant is simply outstanding. 
            Each dish is a work of art, both in presentation and taste. 
            I've never had a bad meal here, and I keep coming back for more."
        </p>
        <div className='flex items-center gap-6 mt-10'>
            <img src={client1} alt="profile" className='w-[60px] aspect-square object-cover rounded-full'/>
            <div>
                <h4 className='text-xl font-bold'>Jacob Mitchell</h4>
                <p className='text-base text-slate-700'>Developer at Google</p>
                <p className='flex items-center gap-2 text-yellow-400'>
                    <Star className='fill-yellow-400 stroke-yellow-400 animate-bounce' size={15}/>
                    <span>6.5</span>
                </p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <p className='text-lg font-light text-slate-800'>
            "I can't get enough of the food at this place. 
            The flavors are incredible, and every dish is a delightful surprise. 
            The chef's attention to detail is truly remarkable."
        </p>
        <div className='flex items-center gap-6 mt-10'>
            <img src={client2} alt="profile" className='w-[60px] aspect-square object-cover rounded-full'/>
            <div>
                <h4 className='text-xl font-bold'>Emily Anderson</h4>
                <p className='text-base text-slate-700'>University Student</p>
                <p className='flex items-center gap-2 text-yellow-400'>
                    <Star className='fill-yellow-400 stroke-yellow-400 animate-bounce' size={15}/>
                    <span>6.5</span>
                </p>
            </div>
        </div>
    </SwiperSlide>
  </Swiper>
)

export default Testimonials