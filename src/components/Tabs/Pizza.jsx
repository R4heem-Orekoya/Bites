import React from "react";
import pizza1 from '../../assets/pizza1.jpg'
import pizza2 from '../../assets/pizza2.jpg'
import pizza3 from '../../assets/pizza3.jpg'
import pizza4 from '../../assets/pizza4.jpg'

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const Pizza = () => {
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
        <img src={pizza1} alt="pizza-image1" className="aspect-square object-cover rounded-xl"/>
        <div className="flex justify-center mt-2">
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
        </div>
        <h3 className="text-lg font-bold mt-2">Pepperoni Pizza</h3>
        <p className="text-base font-medium">$60.99</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <img src={pizza2} alt="pizza-image2" className="aspect-square object-cover rounded-xl"/>
        <div className="flex justify-center mt-2">
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
        </div>
        <h3 className="text-lg font-bold mt-2">Margherita Pizza</h3>
        <p className="text-base font-medium">$24.99</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <img src={pizza3} alt="pizza-image3" className="aspect-square object-cover rounded-xl"/>
        <div className="flex justify-center mt-2">
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
        </div>
        <h3 className="text-lg font-bold mt-2">Margarita Pizza</h3>
        <p className="text-base font-medium">$30.99</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <img src={pizza4} alt="pizza-image4" className="aspect-square object-cover rounded-xl"/>
        <div className="flex justify-center mt-2">
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
        </div>
        <h3 className="text-lg font-bold mt-2">Hawaiian Pizza</h3>
        <p className="text-base font-medium">$40.99</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Pizza;
