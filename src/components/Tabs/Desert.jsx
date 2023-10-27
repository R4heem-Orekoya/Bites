import React from 'react'
import desert1 from '../../assets/desert1.jpg'
import desert2 from '../../assets/desert2.jpg'
import desert3 from '../../assets/desert3.jpg'
import desert4 from '../../assets/desert4.jpg'

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const Desert = () => {
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
            <img src={desert1} alt="drink-image1" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Ice Cream</h3>
            <p className="text-base font-medium">$5.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={desert2} alt="drink-image2" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Pie</h3>
            <p className="text-base font-medium">$9.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={desert3} alt="drink-image3" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Cookies</h3>
            <p className="text-base font-medium">$11.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={desert4} alt="drink-image4" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Cake</h3>
            <p className="text-base font-medium">$9.99</p>
          </SwiperSlide>
        </Swiper>
      );
}

export default Desert
