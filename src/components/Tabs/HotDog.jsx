import React from 'react'
import hotdog1 from '../../assets/hotdog1.jpg'
import hotdog2 from '../../assets/hotdog2.jpg'
import hotdog3 from '../../assets/hotdog3.jpg'
import hotdog4 from '../../assets/hotdog4.jpg'

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const HotDog = () => {
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
            <img src={hotdog1} alt="hotdog-image1" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">New York-Style Hot Dog</h3>
            <p className="text-base font-medium">$19.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={hotdog2} alt="hotdog-image2" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Chicago-Style Hot Dog</h3>
            <p className="text-base font-medium">$24.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={hotdog3} alt="hotdog-image3" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Jumbo Dog</h3>
            <p className="text-base font-medium">$9.99</p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img src={hotdog4} alt="hotdog-image4" className="aspect-square object-cover rounded-xl"/>
            <div className="flex justify-center mt-2">
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={15} className="fill-yellow-400 stroke-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mt-2">Chili Dog:</h3>
            <p className="text-base font-medium">$14.99</p>
          </SwiperSlide>
        </Swiper>
      );
}

export default HotDog
