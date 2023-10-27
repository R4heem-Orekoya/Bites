import React from 'react'
import burger1 from '../../assets/burger1.jpg'
import burger2 from '../../assets/burger2.jpg'
import burger3 from '../../assets/burger3.jpg'
import burger4 from '../../assets/burger4.jpg'

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const Burger = () => {
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
            <img src={burger1} alt="burger-image1" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Turkey Burger</h3>
            <p className="text-base font-medium">$59.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={burger2} alt="burger-image2" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Bacon Cheeseburger</h3>
            <p className="text-base font-medium">$39.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={burger3} alt="burger-image3" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">BBQ Burger</h3>
            <p className="text-base font-medium">$29.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={burger4} alt="burger-image4" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Cheeseburger</h3>
            <p className="text-base font-medium">$49.99</p>
          </SwiperSlide>
        </Swiper>
      );
}

export default Burger
