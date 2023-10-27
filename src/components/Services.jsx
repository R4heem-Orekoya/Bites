import React from 'react'
import Plate from '../assets/plate.png'
import Taste from '../assets/delicious.png'
import Delivery from '../assets/delivery.png'
import Chef from '../assets/chef.png'

const Services = () => {
  return (
    <section id='services' className='py-16 w-[1000px] max-w-[90%] mx-auto'>
        <div className='text-center w-[450px] max-w-[100%] mx-auto'>
            <h3 className='text-lg font-bold text-yellow-400'>Our Services</h3>
            <h2 className='text-4xl max-md:text-3xl font-bold mt-4 leading-[1.4]'>We Offer people best Way to eat healthy food</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12'>
            <div className='card relative bg-white rounded-xl flex flex-col items-center py-16 hover:text-yellow-400 group'>
              <div className='before:absolute before:opacity-0 before:group-hover:opacity-100 before:bottom-0 before:left-0 before:duration-200 before:h-[10px] before:w-full before:bg-yellow-400 before:rounded-b-xl'></div>
                <img src={Plate} alt="plate-icon" className='w-[80px] aspect-square object-cover'/>
                <h4 className='text-xl font-bold mt-6'>Quality Food</h4>
            </div>
            <div className='card relative bg-white rounded-xl flex flex-col items-center py-16 hover:text-yellow-400 group'>
              <div className='before:absolute before:opacity-0 before:group-hover:opacity-100 before:bottom-0 before:left-0 before:duration-200 before:h-[10px] before:w-full before:bg-yellow-400 before:rounded-b-xl'></div>
                <img src={Taste} alt="taste-icon" className='w-[80px] aspect-square object-cover'/>
                <h4 className='text-xl font-bold mt-6'>Super Taste</h4>
            </div>
            <div className='card relative bg-white rounded-xl flex flex-col items-center py-16 hover:text-yellow-400 group'>
              <div className='before:absolute before:opacity-0 before:group-hover:opacity-100 before:bottom-0 before:left-0 before:duration-200 before:h-[10px] before:w-full before:bg-yellow-400 before:rounded-b-xl'></div>
                <img src={Delivery} alt="delivery-icon" className='w-[80px] aspect-square object-cover'/>
                <h4 className='text-xl font-bold mt-6'>Fast Delivery</h4>
            </div>
            <div className='card relative bg-white rounded-xl flex flex-col items-center py-16 hover:text-yellow-400 group'>
              <div className='before:absolute before:opacity-0 before:group-hover:opacity-100 before:bottom-0 before:left-0 before:duration-200 before:h-[10px] before:w-full before:bg-yellow-400 before:rounded-b-xl'></div>
                <img src={Chef} alt="chef-icon" className='w-[80px] aspect-square object-cover'/>
                <h4 className='text-xl font-bold mt-6'>Cooking Service</h4>
            </div>
        </div>
    </section>
  )
}

export default Services
