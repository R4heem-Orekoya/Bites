import React from 'react'
import drink1 from '../../assets/drink1.jpg'
import drink2 from '../../assets/drink2.jpg'
import drink3 from '../../assets/drink3.jpg'
import drink4 from '../../assets/drink4.jpg'

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const Drink = () => {
    return (
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            750: {
              slidesPerView: 2,
            },
        }}
          className="mt-12 pb-[50px]"
        >
          <SwiperSlide className="text-center">
            <img src={drink1} alt="pepsi" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Pepsi</h3>
            <p className="text-base font-medium">$9.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={drink2} alt="coke" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Coke</h3>
            <p className="text-base font-medium">$9.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={drink3} alt="monster-drink" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Monster Drink</h3>
            <p className="text-base font-medium">$19.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={drink4} alt="ice tea" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Ice Tea</h3>
            <p className="text-base font-medium">$9.99</p>
          </SwiperSlide>
        </Swiper>
      );
}

export default Drink
